import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Task } from './task';

@Directive({
  selector: '[myTask]'
})
export class MyTaskDirective {

  private _myTask: Task;

  // Injeção de Dependência
  constructor(private el: ElementRef) {
    this.el.nativeElement.innerHTML += 'conteudo inserido';
  }

  get myTask() {
    return this._myTask;
  }

  // Passando Valores do Componente
  @Input()
  set myTask(value: Task) {
    this._myTask = value;
    this.changeColorTask();
  }

  // Eventos
  @HostListener('click')
  onClick() {
    alert(this.myTask);
  }

  changeColorTask() {
    // [ngClass]="{'item-orange':item.value>5,'item-red':item-value<5}"
    this.el.nativeElement.style.color = this.myTask.value > 5 ? 'orange' : 'red';
  }
}
