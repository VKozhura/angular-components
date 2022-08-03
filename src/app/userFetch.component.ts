import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";
import { User } from "./user"

@Component({
    selector: 'userFetch-comp',
    template: `<div>{{this.httpService.errorMessage}}</div>
    <ul>
        <li *ngFor="let user of users">
            <p>Имя пользователя: {{user?.name}}</p>
            <p>Возраст пользователя: {{user?.age}}</p>
        </li>
    </ul>`,
    providers: [HttpService]
})
export class UserFetchComponent implements OnInit {
    users: User[] = [];
    error: any;
    httpService: HttpService;
    constructor( httpService: HttpService) {
        this.httpService = httpService
    }
    
    ngOnInit(){
        this.httpService.getUsers().subscribe(data => this.users = data);
    }
}