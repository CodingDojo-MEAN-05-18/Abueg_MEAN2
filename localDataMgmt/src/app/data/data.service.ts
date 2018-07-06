import { Injectable } from '@angular/core';
//  define properties and methods in our DataService
@Injectable({
  providedIn: 'root',
})
export class DataService {
  numbers: number[] = [1, 2, 3];
  numbersA: number[] = [];
  numbersB: number[] = [4];
  aMinusB: number = 0;

  random: number = Math.round(Math.random() * 1000);

  constructor() {}

  retrieveNumbers(): number[] {
    return this.numbers;
  }
  retrieveNumbersA(): number[] {
    return this.numbersA;
  }
  retrieveNumbersB(): number[] {
    return this.numbersB;
  }
  addNumber(num: number) {
    this.numbers.push(num);
  }
  rand(): number {
    return this.random;
  }
  genNumB(len: number): void {
    console.log(len);
    for (let i = 0; i < len; i++) {
      this.numbersB[i] = Math.round(Math.random() * 1000);
      console.log(this.numbersB[i]);
    }
  }
}
