import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.models';
import { BaseApi } from '../core/base-api';
@Injectable()
export class UserService  extends BaseApi{
    constructor(public  http: HttpClient) {
      super(http)
    }
    getUserByEmail(email: string) {
        
       return this.get('users?email='+email);
         //return this.http.get('http://localhost:3000/users?email='+email);
    }
    createNewUser(user: User) {
        
        return this.post('users', user)
      } 

}
