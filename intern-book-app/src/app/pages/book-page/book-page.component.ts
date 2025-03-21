import {Component, Input} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {NgForOf, NgIf} from '@angular/common';
import {AddBookComponent} from '../../components/add-book/add-book.component';
import {bookList} from '../../consts/bookList';
import {MatTabNavPanel} from '@angular/material/tabs';
import {Book} from '../../types/book';
import {BookCardComponent} from '../../components/book-card/book-card.component';

@Component({
  selector: 'app-book-page',
  imports: [
    AddBookComponent,
    NgIf,
    BookCardComponent
  ],
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.css'
})
export class BookPageComponent {
  books = bookList;

  deleteBook($event: Book) {
    this.books.splice(this.books.indexOf($event), 1);
  }
}
