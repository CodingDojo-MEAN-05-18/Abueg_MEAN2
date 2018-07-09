import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NinGoldService {
  count: number = 0;
  messages: string[] = ['first message'];

  constructor() {}

  retrieveCount(): number {
    return this.count;
  }

  countChange(count: number) {
    this.count = this.count + Math.round(Math.random() * 1000);
    // return this.count;
  }

  retrieveMessages(): string[] {
    return this.messages;
  }

  addMessage(message: string) {
    this.messages.push(message);
  }
}
