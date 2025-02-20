import {Component} from '@angular/core';
import {MatCard, MatCardActions} from '@angular/material/card';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'app-add-book',
  imports: [
    MatCard,
    MatFormField,
    MatInput,
    MatCardActions,
    MatLabel
  ],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {

}
