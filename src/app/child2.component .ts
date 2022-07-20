import { Component, Input } from '@angular/core';

@Component({
  selector: 'child2-comp',
  template: `
    <p>Имя пользователя: {{userName2}}</p>
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
export class Child2Component {
  @Input() userName2: string = ''; //входное свойство
  _userAge2: number = 0;

  // установка значения userAge2
  @Input()
  set userAge(age: number) {
    if (age < 0) {
      this._userAge2 = 0
    } else if (age > 100) {
      this._userAge2 = 100
    } else {
      this._userAge2 = age;
    }
  }

  get userAge() {
    return this._userAge2
  }
}
