import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from '../../types/book';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {NgForOf} from '@angular/common';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogConfirmComponent} from '../dialog-confirm/dialog-confirm.component';
import {Observable} from 'rxjs';

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

  constructor(public dialog: MatDialog) {
  }

  delete(book: Book) {
    this.openDialog().subscribe(result => {
      if (result) {
        this.deleteBook.emit(book);
      }
    });
  }

  openDialog(): Observable<boolean> {
    let dialogRef = this.dialog.open(DialogConfirmComponent);
    return dialogRef.afterClosed();
  }
}
