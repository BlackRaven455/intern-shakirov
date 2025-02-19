import {Component} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatCard, MatCardActions} from "@angular/material/card";

@Component({
  selector: 'app-add-book',
  imports: [
    MatFormField,
    MatInputModule,
    MatInput,
    MatCard,
    MatCardActions,
    MatLabel
  ],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {

}
