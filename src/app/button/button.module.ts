import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ButtonComponent } from './button.component'; 



@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ ButtonComponent],
    exports: [ ButtonComponent]       // экспортируем компонент
})
export class ButtonModule { }