import { Component } from '@angular/core';
import { User } from './user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user = new User();
  users = [];
  formName: string = '';
  formEmail: string = '';
  formStatement: string = '';

  onSubmit(event: Event, formData: NgForm) {
    console.log(formData);
    console.log(this.user);

    if (formData.valid) {
      this.formName = this.user.first_name;
      this.formEmail = this.user.email;
    }

    this.users.push(this.user);
    this.user = new User();
    formData.reset();
  }
}
