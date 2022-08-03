import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {User} from './user';
import {Observable} from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class HttpService {
    errorMessage: String = "";
    constructor(private http: HttpClient) {}
    
    getUsers() : Observable<User[]> {
        return this.http.get('assets/usersP.json').pipe(map((data: any) => {
            let userList = data['userList']
            return userList.map((user: any): User => new User(user.userName, user.userAge))
        }),
        catchError(err => {
            console.log(err);
            this.errorMessage = err.message;
            return []
        }))
    };
}