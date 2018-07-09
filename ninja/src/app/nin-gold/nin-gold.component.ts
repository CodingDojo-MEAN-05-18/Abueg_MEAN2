import { Component, OnInit } from '@angular/core';
import { NinGoldService } from './nin-gold.service';
// import { Message } from '../nin-gold';

@Component({
  selector: 'app-nin-gold',
  templateUrl: './nin-gold.component.html',
  styleUrls: ['./nin-gold.component.css'],
})
export class NinGoldComponent implements OnInit {
  // messages: [
  //   { message: 'first' },
  //   { message: 'second' },
  //   { message: 'third' },
  //   { message: 'fourth' }
  // ];
  messages: string[] = [];
  farm: string = 'trying to insert farm';
  constructor(private ninGoldService: NinGoldService) {}

  dataFromChild(eventData) {
    console.log(eventData);
  }
  invoked(event) {
    console.log('invoked', event);
  }
  insertMessage(event) {
    this.messages.push('farmMessage');
    this.ninGoldService.addMessage(this.farm);
  }

  ngOnInit() {}
}
