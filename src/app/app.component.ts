import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  count: number = 0;
  name: string = '';
  isRed = false;
  isRedColor = false;
  name1 = 'Петр';
  name2 = 'Tom';
  
  nameCheckbox: string = '';

  name3: string = "Tom";
  age: number = 24;

  name4: string = "Tom";
  age2: number = 24;

  clicks: number = 0;
  onChanged(increased: any) {
    debugger
    increased === true ? this.clicks++ : this.clicks--;
  }

  increase(): void {
    this.count++;
  }
}
