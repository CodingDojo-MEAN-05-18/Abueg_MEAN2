import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css'],
})
export class PowerComponent implements OnInit {
  // notes = [{ title: 'first note' }, { title: 'second note' }];

  power: number;
  onSubmit(power) {
    console.log(power);
  }
  constructor() {}

  ngOnInit() {
    this.power = 1;
  }
}
