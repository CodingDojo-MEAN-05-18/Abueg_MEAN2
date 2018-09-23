import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CalculateService } from '../calculate.service';

@Component({
  selector: 'app-user-score',
  templateUrl: './user-score.component.html',
  styleUrls: ['./user-score.component.css'],
})
export class UserScoreComponent implements OnInit {
  userTrue: boolean = null;
  score: number = 0;
  username: string = null;
  constructor(private calculateService: CalculateService) {}

  ngOnInit() {}
}
