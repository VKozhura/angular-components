import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Hello Angular</h1>
    <p>Angular 14 представляет модульную архитектуру приложения</p>`,
  styles: [
    `
      h1,
      h2 {
        color: navy;
      }

      p {
        font-size: 13px;
        font-family: Verdana;
      }
    `,
  ],
})
export class AppComponent {}
