import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from './button/button.module';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ChildComponent } from './child.component';
import { Child1Component } from './child1.component';
import { Child2Component } from './child2.component';
import { Child3Component } from './child3.component';
import { Child4Component } from './child4.component';
import { Child5Component } from './child5.component';
import { Child6Component } from './child6.component';
import { Child7Component } from './child7.component';
import { BoldDirective } from './bold.directive';
import { DataComponent } from './data.component';
import { FormComponent } from './form.component';
import { UserComponent } from './user.component';
import { Form1Component } from './form1.component';
import { TaskComponent } from './task01/task.component';

import { DataService } from './data.service';
import { LogService } from './log.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [TaskComponent, AppComponent, UserComponent, FormComponent, Form1Component, DataComponent, ChildComponent, Child1Component, Child2Component, Child3Component, Child4Component, Child5Component, Child6Component, Child7Component, BoldDirective ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, ButtonModule, BrowserAnimationsModule, MatButtonModule, MatInputModule ],
  providers: [DataService, LogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
