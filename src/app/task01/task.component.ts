import { Component } from "@angular/core";
import { NgModel } from "@angular/forms";

export class User {
    constructor( public userName: string, public email: string, public userBirthdate: string ) {}
}

@Component({
    selector: 'userdata-app',
    templateUrl: './task.component.html',

})
export class TaskComponent {
    userName: string = ''
    email: string = ''
    userBirthdate: string = ''
    users: User[] = []

    addUser() {
        this.users = [...this.users, new User(this.userName, this.email, this.userBirthdate)]
        this.userName = ''
        this.email = ''
        console.log(this.users)
    }

    deleteRow(index: number) {
        this.users.splice(index, 1)
        console.log(this.users);
    }
}