import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CalculateService } from '../calculate.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  name: any[] = [];
  userTrue: boolean = null;
  username: string = null;
  constructor(private calculateService: CalculateService) {}

  CalculateScore(form: NgForm) {
    this.username = form.value.username;
    this.calculateService.getUser(this.username).subscribe(user => {
      this.userTrue = true;
      this.CalculateScore = user.public_repos + user.followers;
      form.reset();
    }, (response: Response) => (this.userTrue = false));
  }
}
