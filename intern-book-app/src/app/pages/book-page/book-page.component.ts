import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {AddBookComponent} from '../../components/add-book/add-book.component';
import {Book} from '../../types/book';
import {BookCardComponent} from '../../components/book-card/book-card.component';
import {BookService} from '../../services/book.service';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-book-page',
  imports: [
    AddBookComponent,
    NgIf,
    BookCardComponent,
    NgForOf,
    MatPaginator
  ],
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.css'
})
export class BookPageComponent implements OnInit, AfterViewInit {
  books: Book[] = [];
  paginatedBooks: Book[] = [];
  pageSize = 5;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(public bookService: BookService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.bookService.getBooks().subscribe(updatedBooks => {
        this.books = updatedBooks;
        this.updatePagination();
      });
    });
  }

  ngAfterViewInit() {
    this.updatePagination();
  }

  deleteBook(bookId: number) {
    this.bookService.removeBook(bookId);
  }

  updatePagination() {
    const start = this.paginator.pageIndex * this.paginator.pageSize;
    this.paginatedBooks = this.books.slice(start, start + this.paginator.pageSize);
  }
}
