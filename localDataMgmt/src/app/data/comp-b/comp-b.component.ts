import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css'],
})
export class CompBComponent implements OnInit {
  numbers: number[] = [];
  numbersB: number[] = [];
  // random: number = Math.round(Math.random() * 1000);
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.numbers = this.dataService.retrieveNumbers();
    this.numbersB = this.dataService.numbersB;
  }
  pushOne(num: number) {
    this.dataService.addNumber(Math.round(Math.random() * 1000));
  }
  // randomNum() {
  //   this.random = this.dataService.rand();
  // }
  createNum(num: number) {
    this.dataService.genNumB(num);
    // this.dataService.addNumber();
  }
}
