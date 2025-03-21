import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from '../../types/book';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {NgForOf} from '@angular/common';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogConfirmComponent} from '../dialog-confirm/dialog-confirm.component';
import {Observable} from 'rxjs';
import {MessageService} from '../../services/message.service';

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

  constructor(public dialog: MatDialog, public messageService: MessageService) {
  }

  delete(book: Book) {
    this.openDialog().subscribe(result => {
      if (result) {
        this.deleteBook.emit(book);
        this.messageService.add(book.name, `Deleted`)
      }
    });
  }

  openDialog(): Observable<boolean> {
    let dialogRef = this.dialog.open(DialogConfirmComponent);
    return dialogRef.afterClosed();
  }
}
