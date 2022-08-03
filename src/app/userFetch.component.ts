import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";
import { User } from "./user"

@Component({
    selector: 'userFetch-comp',
    template: `<ul>
        <li *ngFor="let user of users">
            <p>Имя пользователя: {{user?.name}}</p>
            <p>Возраст пользователя: {{user?.age}}</p>
        </li>
    </ul>`,
    providers: [HttpService]
})
export class UserFetchComponent implements OnInit {
    users: User[] = [];
    constructor(private http: HttpService) {}
    
    ngOnInit(){
        this.http.getUsers().subscribe((data:any) => this.users = data);
    }
}