import {Component} from '@angular/core';
import {MatCard, MatCardActions} from '@angular/material/card';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {bookList} from '../../consts/bookList';
import {Book} from '../../types/book';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-add-book',
  imports: [
    MatCard,
    MatFormField,
    MatInput,
    MatCardActions,
    MatLabel,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  book: Book = {name: '', detail: '', evaluation: ''};

  constructor(private messageService: MessageService) {
  }

  addBook() {
    if (this.book.name && this.book.detail && this.book.evaluation) {
      bookList.push({...this.book});
      this.messageService.add(this.book.name, `Added`)
      this.book = {name: '', detail: '', evaluation: ''};
      console.log('Book added:', bookList);
    } else {
      alert('すべての項目を入力してください');
    }
  }
}
