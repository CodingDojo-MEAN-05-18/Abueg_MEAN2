import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css'],
})
export class AlphaComponent implements OnInit {
  task: any[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.task.subscribe(task => {
      this.task = task;
    });
  }
}
