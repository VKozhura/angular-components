import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'child4-comp',
  template: `
    <input type="text" [ngModel] = 'userName' (ngModelChange) = 'onNameChange($event)'>
    <button (click)="onQwer()">qweqweqeqw</button>`,
    
})
export class Child4Component {
  @Input() userName: string = ""; // входное свойство, к которому привзяан инпут

  @Output() userNameChange = new EventEmitter<string>; //генерируемое событие

  @Output() qwer = new EventEmitter<any>();

  // метод-обработчик события
  onNameChange(name: string) {
    this.userName = name;  // изменяем свойство userName
    this.userNameChange.emit(name) 
  }

  onQwer() {
    this.qwer.emit()
  }

}
