import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from "src/app/shared/sevices/UserService";
import { User } from 'src/app/shared/models/user.models';

@Component({
  selector: 'wfm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   form: FormGroup;
  currentUser: User;
  constructor(  private userService: UserService) {
  
  }

  ngOnInit() {
    this.form=new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required , Validators.minLength(6)])
    });
  }
   onSubmit()
   {
       const fromData=this.form.value;
       

          this.userService.getUserByEmail(fromData.email).subscribe((user: User) => {
            this.currentUser = user;
       
        
          if(this.currentUser)
          {
             if(this.currentUser[0].password===fromData.password)
             {
              alert('Ура')
             }
             else{
                alert('Нет такого password')
             }
          }
          else{
            alert('Нет такого')
          }
        
        });
       
      
   }
}
