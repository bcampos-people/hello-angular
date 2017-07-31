import { Component, Input } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.scss']
})
export class TaskNewComponent {

  task: Task = {
    name: '',
    value: 0,
    date_launch: '2017-07-07'
  };

  @Input()
  tasks;

  add() {
    let task = Object.assign({}, this.task);
    this.tasks.push(task);
  }

}
