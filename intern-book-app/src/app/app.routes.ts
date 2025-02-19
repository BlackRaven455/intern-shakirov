import { Routes } from '@angular/router';
import {BooksComponent} from './pages/books/books.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'book-shelf',
    pathMatch: 'full',
  },
  {
    path: 'book-shelf',
    component: BooksComponent,
  }
];
