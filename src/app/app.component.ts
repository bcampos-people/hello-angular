import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tarefas';
  tasks: Array<Task> = [
    { name: 'Cozinhar', value: 50, date_launch: '2017-07-31' }
  ];
}
