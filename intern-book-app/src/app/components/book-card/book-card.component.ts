import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../../types/book';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogConfirmComponent} from '../dialog-confirm/dialog-confirm.component';
import {BehaviorSubject, Observable} from 'rxjs';
import {MessageService} from '../../services/message.service';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {FormControl, FormsModule} from '@angular/forms';
import {MatInput} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {toRomaji} from 'wanakana';
import {MatOption, MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-book-card',
  imports: [
    MatCard,
    MatLabel,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    NgForOf,
    MatFormField,
    FormsModule,
    AsyncPipe,
    MatInput,
    MatSelect,
    MatOption,
  ],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent implements OnInit {
  @Input() books!: Book[];
  @Output() deleteBook = new EventEmitter<Book>();
  filteredBooks = new BehaviorSubject<Book[]>(this.books);
  searchTerm: string = `name`;


  constructor(public dialog: MatDialog, public messageService: MessageService) {
  }

  ngOnInit() {
    this.filteredBooks.next(this.books); // Initialize filteredBooks with all books
  }

  delete(book: Book) {
    this.openDialog().subscribe(result => {
      if (result) {
        this.deleteBook.emit(book);
        this.messageService.add(book.name, `Deleted`);
      }
    });
  }

  openDialog(): Observable<boolean> {
    let dialogRef = this.dialog.open(DialogConfirmComponent);
    return dialogRef.afterClosed();
  }

  search(value: string) {
    console.log(this.searchTerm);
    if (this.searchTerm === `name`) {
      const normalizedSearch = toRomaji(value.toLowerCase());
      this.filteredBooks.next(this.books.filter((book: Book) => toRomaji(book.name.toLowerCase()).includes(normalizedSearch)));
    } else {

      this.filteredBooks.next(this.books.filter((book: Book) => book.evaluation.includes(value.toLowerCase())));
    }
  }
}
