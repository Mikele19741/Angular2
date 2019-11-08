import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserService{
  
constructor(private http: HttpClient) {    
    }
    getUserByEmail(email: string)
    {
        return this.http.get(`http://localhost:30000/users?email=$(email)`);
       
        
    }   
        
    
}