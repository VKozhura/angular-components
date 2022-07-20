import { Component } from '@angular/core';

@Component({
  selector: 'child5-comp',
  template: `
    <p>{{counter}}</p>`,
    
})
export class Child5Component {
 counter: number = 0;
 increment() {this.counter++}
 decrement() {this.counter--}

}
