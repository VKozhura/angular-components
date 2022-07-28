import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Child6Component } from './child6.component';

import { DataService } from './data.service';
import { LogService } from './log.service';


export class User {
  userName: string;
  
  constructor( userName: string, public userEmail: string, public userBirthdate: string, public userTaxId: number ) {
    this.userName = userName;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [DataService, LogService]
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

  //============

  condition: boolean = true;
     
    toggle1(){
        this.condition = !this.condition;
    }

  //===========

  items = ["Tom", "Bob", "Sam", "Bill"]

  //=============
  count1: number = 5;

  qweparent() {
    console.log('afsdfasdfasdf')
  }

  //==== Сервис

//   items1: string[] = [];
//   modelName: string = '';

//   constructor(private dataService: DataService) {}

//   addItem(name: string) {
//     this.dataService.addData(name)
//   }

//   ngOnInit() {
//     this.items1 = this.dataService.getData();
//   }

  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      "userName": new FormControl(''),
      "userEmail": new FormControl(''),
      "userBirthdate": new FormControl(''),
      "userTaxId": new FormControl(0, Validators.pattern('[0-9]{12}'))
    })
  }

  users: User[] = []

  addUser() {
        this.users = [...this.users, new User(this.myForm.value.userName, this.myForm.value.userEmail, this.myForm.value.userBirthdate, this.myForm.value.userTaxId)]
        console.log(this.myForm);
        this.myForm.reset()
        console.log(this.users)
  }

  deleteRow(index: number) {
        this.users.splice(index, 1)
        console.log(this.users);
  }

}
