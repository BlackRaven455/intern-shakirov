import {Component} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-toolbar',
  imports: [
    MatToolbar,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

}
