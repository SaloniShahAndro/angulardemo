import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import {User} from "./model/user.model";
import { Observable, of } from 'rxjs';

const httpOptions = {
 // headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class UserService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:4555/adduser';

   getUsers() {
  //   let fakeUsers = [{id: 1, firstName: 'Saloni', lastName: 'Shah', email: 'saloni@gmail.com'},
  //    {id: 2, firstName: 'TestUser1', lastName: 'new', email: 'testuser@gmail.com'},
  //    {id: 11, firstName: 'user2', lastName: 'old', email: 'user2@gmail.com'},
  //    {id: 12, firstName: 'user3', lastName: 'data', email: 'user3@gmail.com'},
  //  ];
  //  return of(fakeUsers);
 
    return this.http.get<User[]>(this.baseUrl);
    
  }

  getUserById(id: number) {
    return this.http.get<User>(this.baseUrl + '/' + id);
  }

  createUser(user: User) {
    return this.http.post(this.baseUrl, user);
  }

  updateUser(user: User) {
    return this.http.post(this.baseUrl + '/' + user.id, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  login(user: User){
    return this.http.post('http://localhost:4555/login',user)
  }
}
