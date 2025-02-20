import {Component} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {NgForOf} from '@angular/common';
import {AddBookComponent} from '../../components/add-book/add-book.component';
import {BOOKS} from '../../consts/books';

@Component({
  selector: 'app-book-page',
  imports: [
    MatCardActions,
    MatCardContent,
    MatCardTitle,
    MatCardHeader,
    NgForOf,
    AddBookComponent,
    MatCard,
    MatCardTitle
  ],
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.css'
})
export class BookPageComponent {
  books = BOOKS;
}
