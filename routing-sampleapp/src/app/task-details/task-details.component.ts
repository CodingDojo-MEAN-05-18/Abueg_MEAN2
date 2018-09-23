import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
    });
  }

  ngOnInit() {}
}
