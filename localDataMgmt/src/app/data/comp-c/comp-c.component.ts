import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.css'],
})
export class CompCComponent implements OnInit {
  numbers: number[] = [];
  random: number = Math.round(Math.random() * 1000);
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.numbers = this.dataService.retrieveNumbers();
  }
  pushOne() {
    this.dataService.addNumber(2);
  }
  randomNum() {
    this.random = this.dataService.rand();
    // this.push
  }
}
