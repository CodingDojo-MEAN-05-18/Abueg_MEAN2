import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css'],
})
export class CompAComponent implements OnInit {
  numbers: number[] = [];

  random: number = 0;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.numbers = this.dataService.retrieveNumbers();
  }
  pushOne() {
    this.dataService.addNumber(1);
    this.dataService.addNumber(this.random);
  }
  randomNum() {
    this.random = this.dataService.rand();
  }
}
