import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";
import { User } from "./user"

@Component({
    selector: 'userFetch-comp',
    template: `<div>
        <p>Имя пользователя: {{user?.name}}</p>
        <p>Возраст пользователя: {{user?.age}}</p>
    </div>`,
    providers: [HttpService]
})
export class UserFetchComponent implements OnInit {
    user: User | undefined;
    constructor(private http: HttpService) {}
    
    ngOnInit(){
        this.http.getData().subscribe((data:any) => this.user = new User(data.name, data.age));
    }
}