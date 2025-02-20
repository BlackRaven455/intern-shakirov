import {Routes} from '@angular/router';
import {BookPageComponent} from './pages/book-page/book-page.component';

export const routes: Routes = [{
  path: '',
  redirectTo: 'books',
  pathMatch: 'full',
}, {
  path: 'books',
  component: BookPageComponent,
}];
