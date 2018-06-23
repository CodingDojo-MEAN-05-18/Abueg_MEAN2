import { Component } from '@angular/core';
import { User } from './user';
import { USERS } from './data/user-data';

@Component({
  // decorator - function given an object as a parameter
  selector: 'app-root',
  templateUrl: './app.component.html', // url of the template file
  styleUrls: ['./app.component.css'], // array of urls for multiple css files
})
export class AppComponent {
  users: Array<User> = USERS;
  title: string = 'This is my title example : ';
  blue: string = 'blue';
  pink: string = 'pink';
  title2 = 'A title example where tsline is all happy!';
  yellow: string = 'yellow';
}
