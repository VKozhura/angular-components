import { Component, Input } from '@angular/core';

@Component({
  selector: 'child2-comp',
  template: `
    <p>Имя пользователя: {{userName2}}</p>
    <p>Возраст пользователя: {{userAge2}}</p>`,
  styles: [
    `
      h2,
      p {
        color: red;
      }
    `,
  ],
})
export class Child2Component {
  @Input() userName2: string = ''; //входное свойство
  _userAge2: number = 0;

  @Input()

  set userAge2(age: number) {
    if (age < 0) {
      this._userAge2 = 0
    } else if (age > 100) {
      this._userAge2 = 100
    } else {
      this._userAge2 = age;
    }
  }

  get userAge2() {
    return this._userAge2
  }
}
