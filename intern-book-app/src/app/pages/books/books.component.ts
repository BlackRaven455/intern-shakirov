import {Component, OnInit} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardTitle
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {NgForOf} from '@angular/common';
import {Book} from '../../types/book';
import {MatDatepicker, MatDateRangeInput} from '@angular/material/datepicker';
import {BOOKS} from '../../types/mock-books';
import {AddBookComponent} from '../../components/add-book/add-book.component';

@Component({
  selector: 'app-books',
  imports: [
    MatCard,
    MatCardTitle,
    NgForOf,
    MatCardHeader,
    MatCardActions,
    MatCardContent,
    AddBookComponent,

  ],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {
  books = BOOKS;

  ngOnInit() {

  }
}
