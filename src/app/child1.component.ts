import { Component, Input } from '@angular/core';

@Component({
  selector: 'child1-comp',
  template: `
    <p>Имя пользователя: {{userName}}</p>
    <p>Возраст пользователя: {{userAge}}</p>`,
  styles: [
    `
      h2,
      p {
        color: red;
      }
    `,
  ],
})
export class Child1Component {
  @Input() userName: string = ''; //входное свойство
  @Input() userAge: number = 0;
}
