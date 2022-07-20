import { Component } from '@angular/core';

@Component({
  selector: 'child6-comp',
  template: `
    <p>{{counter}}</p>`,
    
})
export class Child6Component {
 counter: number = 0;
 increment() {this.counter++}
 decrement() {this.counter--}

}
