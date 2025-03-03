import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from '../../types/book';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {NgForOf} from '@angular/common';
import {bookList} from '../../consts/bookList';

@Component({
  selector: 'app-book-card',
  imports: [
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    NgForOf
  ],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {
  @Input() books!: Book[];
  @Output() deleteBook = new EventEmitter<Book>();

  delete(book: Book) {
    this.deleteBook.emit(book);
  }
}
