import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  number = Math.round(Math.random() * 1000);
  constructor() {}
}
