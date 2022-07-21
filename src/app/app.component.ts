import { Component, ElementRef, ViewChild } from '@angular/core';
import { Child6Component } from './child6.component';

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

  name5: string = 'Варя'

  clicks: number = 0;
  onChanged(increased: any) {
    increased === true ? this.clicks++ : this.clicks--;
  }

  increase(): void {
    this.count++;
  }

  // ===============
  @ViewChild(Child6Component, { static: false })
    private counterComponent: Child6Component | undefined;
      
    increment() { this.counterComponent?.increment(); }
    decrement() { this.counterComponent?.decrement(); }

  //==========================
  @ViewChild('nameText', { static: false })
  nameParagraph: ElementRef | undefined;
  name6: string = 'Саша';
  change() {
    if (this.nameParagraph !== undefined) {
      console.log(this.nameParagraph.nativeElement.textContent);
      this.nameParagraph.nativeElement.textContent = "hell";
    }
  }

  //================

  isVerdana = true;
  isNavy = true;
 
  currentClasses = {
    verdanaFont: this.isVerdana,
    navyColor: this.isNavy
  }

  //==================

  visibility: boolean = false;

  toggle() {
    this.visibility = !this.visibility
  }
}
