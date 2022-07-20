import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ChildComponent } from './child.component';
import { Child1Component } from './child1.component ';
import { Child2Component } from './child2.component ';
import { Child3Component } from './child3.component ';
import { Child4Component } from './child4.component ';
import { Child5Component } from './child5.component ';


@NgModule({
  declarations: [AppComponent, ChildComponent, Child1Component, Child2Component, Child3Component, Child4Component, Child5Component ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
