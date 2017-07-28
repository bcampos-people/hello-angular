import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tarefas';
  tasks = [];
  task  = '';

  add() {
    this.tasks.push(this.task);
    console.log(this.tasks);
  }
}
