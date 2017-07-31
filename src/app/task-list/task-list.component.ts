import { Component } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  tasks = [];
  task: Task = {
    name: '',
    value: 0,
    date_launch: '2017-07-31'
  };

  add() {
    let task = Object.assign({}, this.task);
    this.tasks.push(task);

    console.log(task);
  }
}
