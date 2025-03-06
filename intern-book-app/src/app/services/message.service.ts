import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(name: string, message: string) {
    this.messages.push(`${message} ${name} book in library`);
  }

  clear() {
    this.messages = [];
  }
}
