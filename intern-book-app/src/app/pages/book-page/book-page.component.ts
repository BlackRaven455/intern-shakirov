import {Component, Input, OnInit} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {NgForOf, NgIf} from '@angular/common';
import {AddBookComponent} from '../../components/add-book/add-book.component';
import {bookList} from '../../consts/bookList';
import {MatTabNavPanel} from '@angular/material/tabs';
import {Book} from '../../types/book';
import {BookCardComponent} from '../../components/book-card/book-card.component';
import {BookService} from '../../services/book.service';

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
export class BookPageComponent implements OnInit {
  books: Book[] = [];

  constructor(public bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.getBooks().subscribe(updatedBooks => {
      this.books = updatedBooks;
    });
  }


  deleteBook(bookId: number) {
    this.bookService.removeBook(bookId);
  }
}
