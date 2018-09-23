import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  task: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    this.getTask();
  }
  getTask() {
    this.http
      .get('http://000000000000000000000000.mockapi.io/task')
      .subscribe((task: any[]) => {
        this.task.next(task);
      });
  }

  addTask(newTask: any) {
    this.http
      .post('http://000000000000000000000000.mockapi.io/task', newTask)
      .subscribe(response => {
        this.getTask();
      });
  }

  // below is a service method that pass arguments FROM the component to the BehaviorSubjects .next()
  updateTask(newTask: any): void {
    const templateInfo = this.task.getValue();
    templateInfo.push(newTask);
    this.task.next(templateInfo);
  }
}
