import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";


@Component({
    selector: 'form1-app',
    templateUrl: './form1.component.html',
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `]
})
export class Form1Component {

    name: string = "";
    email: string = "";
    phone: string = "";
    
    
    submit(form: NgForm) {
        console.log(form);
    }

}