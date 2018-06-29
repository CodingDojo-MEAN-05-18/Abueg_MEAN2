import { Component } from '@angular/core';
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Binding Example Project';
  user = {
    email: '',
    password: '',
  };
  users = [];
  onSubmit() {
    // users.push(this.user); //tslint does not link
    console.log(this.user);
    this.users.push(this.user);
    this.user = new User();
    // this.user = {
    //   email: '',
    //   password: '',
    // };
  }
  onButtonClick(arg1) {
    alert('you clicked me!' + arg1);
    console.log(`click even is working `, arg1);
    console.log(`click event activated.`);
  }
}
