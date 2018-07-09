import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NinGoldService } from '../nin-gold.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  @Output() updateMessage = new EventEmitter();
  count: number = 0;
  messages: string[] = [];
  farmNum: number = Math.round(Math.random() * 1000);
  caveNum: number = Math.round(Math.random() * 1000);
  casinoNum: number = Math.round(Math.random() * 1000);
  houseNum: number = Math.round(Math.random() * 1000);
  constructor(private ninGoldService: NinGoldService) {}

  ngOnInit() {}

  sendNewMessage() {
    this.updateMessage.emit('message');
    this.ninGoldService.addMessage('message');
  }

  farm() {
    console.log(this.ninGoldService.countChange(3)); // undef.
    const random = Math.round(Math.random() * 1000);
    console.log(random);
    const farmMessage = `You were at the farm. Earn ${random}`;
    console.log(this.count);
    console.log(farmMessage);
    this.ninGoldService.addMessage(farmMessage);
  }
}
