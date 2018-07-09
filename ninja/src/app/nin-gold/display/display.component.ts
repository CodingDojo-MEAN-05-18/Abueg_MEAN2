import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NinGoldService } from '../nin-gold.service';
// import { Message } from '../nin-gold';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  @Input() myMessages; // child component is expecting message
  @Output() aTaskEventEmitter = new EventEmitter();
  @Output() myEvent = new EventEmitter();
  messages: string[] = [];
  constructor(private ninGoldService: NinGoldService) {}
  triggerEvent() {
    this.aTaskEventEmitter.emit(8);
  }
  callParent() {
    this.myEvent.emit(40);
  }
  ngOnInit() {
    // this.messages = this.messages.retrieveMessages();
    // return this.messages;
    this.messages = this.ninGoldService.retrieveMessages();
  }
}
