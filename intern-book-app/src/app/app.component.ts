import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {MessageComponent} from './components/message/message.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolbarComponent, MessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'intern-book-app';
}
