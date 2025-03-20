import {Component} from '@angular/core';
import {MatCard, MatCardActions} from '@angular/material/card';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {bookList} from '../../consts/bookList';
import {Book} from '../../types/book';
import {MessageService} from '../../services/message.service';
import {MatOption, MatSelect, MatSelectTrigger} from '@angular/material/select';
import {genreList} from '../../consts/genreList';

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
    MatOption, MatSelectTrigger,
  ],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  book: Book = {id: -1, name: '', detail: '', evaluation: '', genreList: [],};
  genres = new FormControl([``]);
  genreList: string[] = genreList;

  constructor(private messageService: MessageService) {
  }

  addBook() {
    if (this.book.name && this.book.detail && this.book.evaluation) {
      this.book.genreList = this.genres?.value || [];
      this.book.id = bookList.length;
      bookList.push({...this.book});
      this.messageService.add(this.book.name, `Added`)
      this.book = {id: -1, name: '', detail: '', evaluation: '', genreList: [],};
      this.genres = new FormControl([``]);
      console.log('Book added:', bookList);
    } else {
      alert('すべての項目を入力してください');
    }
  }
}
