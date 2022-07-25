import { Component} from '@angular/core';
import { NgModel } from '@angular/forms';
        
export class User {
    constructor(public name: string,
        public email: string,
        public phone: string) {}
}

@Component({
    selector: 'user-app',
    templateUrl: './user.component.html',
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
})

export class UserComponent {
    user: User = new User('', '', '');
    addUser(name: NgModel) {
        console.log(this.user);
        console.log(name)
    }
}