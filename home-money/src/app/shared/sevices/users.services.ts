import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.models';


@Injectable()
export class UserService{
  
constructor(private http: HttpClient) {    
    }
    getUserByEmail(email: string)
    {
        return this.http.get(`http://localhost:30000/users?email=$(email)`);
       
        
    }   
    createNewUser(user: User) {
        
      return this.http.post('http://localhost:30000/users', user)
    }  
    
}