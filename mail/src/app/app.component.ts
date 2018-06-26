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
  getColor(value) {
    switch (value) {
      case '0':
        return 'green';
      case '1':
        return 'blue';
      case '2':
        return 'yellow';
      case '3':
        return 'grey';
      case '4':
        return 'red';
      case '5':
        return 'maroon';
      case '6':
        return 'pink';
    }
  }
}
