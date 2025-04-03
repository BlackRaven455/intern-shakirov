import {Component, EventEmitter, Output} from '@angular/core';
import {MatCard, MatCardActions} from '@angular/material/card';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import {Book} from '../../types/book';
import {MessageService} from '../../services/message.service';
import {MatOption, MatSelect, MatSelectTrigger} from '@angular/material/select';
import {genreList} from '../../consts/genreList';
import {BookService} from '../../services/book.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-add-book',
  imports: [
    MatCard,
    MatFormField,
    MatInput,
    MatCardActions,
    MatLabel,
    FormsModule,
    ReactiveFormsModule,
    MatSelect,
    MatOption,
    MatSelectTrigger, // 開業するのがbetter
    NgIf, // 開業するのがbetter
  ],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  genreList: string[] = genreList;
  @Output() refresh: EventEmitter<void> = new EventEmitter();
  book: Book = {
    id: -1,
    name: '',
    detail: '',
    evaluation: '',
    genreList: [],
  };
  bookForm = new FormGroup({
    name: new FormControl(this.book.name, [Validators.required]),
    detail: new FormControl(this.book.detail, [Validators.required]),
    evaluation: new FormControl(this.book.evaluation, [Validators.required]),
    genreList: new FormControl(this.book.genreList, [Validators.required, this.validateGenreList]),
  }, {updateOn: 'submit'});

  constructor(private messageService: MessageService, private bookService: BookService) {
  }

  validateGenreList(control: AbstractControl): ValidationErrors | null {
    return control.value && control.value.length > 0 ? null : {required: true};
  }


  addBook() {
    this.bookService.addBook(this.book);
    this.messageService.add(this.book.name, `Add book with NAME:`);
    this.bookForm.reset();
    this.refresh.emit();
    console.log('Book added:', this.book);
  }

}
