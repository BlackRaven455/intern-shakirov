import {Injectable} from '@angular/core';
import {Book} from '../types/book';
import {bookList} from '../consts/bookList';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  bookList: Book[] = bookList;
  counter = bookList.length > 0 ? bookList[bookList.length - 1].id : 0;
  private bookListSubject = new BehaviorSubject<Book[]>(this.bookList);
  bookList$ = this.bookListSubject.asObservable();

  constructor() {
  }

  addBook(book: Book) {
    book.id = this.generateUniqueId();
    this.bookList.push(book);
    this.bookListSubject.next([...this.bookList]);
  }

  removeBook(id: number) {
    console.log(id);
    this.bookList = this.bookList.filter(item => item.id !== id);
    this.bookListSubject.next([...this.bookList]);
  }

  // updateBook(book: Book) {
  // }

  generateUniqueId() {
    return Date.now() + (this.counter++);
  }

  getBooks() {
    return this.bookList$;
  }
}
