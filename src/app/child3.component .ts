import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'child3-comp',
  template: `
    <button (click) = "change(true)">+</button>
    <button (click) = "change(false)">-</button>`,
    
})
export class Child3Component {
  //чтобы передать событие родительскому комп
  @Output () onChanged = new EventEmitter<boolean>();
  
  change(increased:any) {
    debugger;
    this.onChanged.emit(increased);
}
}
