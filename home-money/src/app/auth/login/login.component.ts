import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from "src/app/shared/sevices/UserService";
import { User } from 'src/app/shared/models/user.models';
import { Message } from 'src/app/shared/models/message.model';
import { AuthService } from 'src/app/shared/sevices/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'wfm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   form: FormGroup;
  currentUser: User;
  message: Message;
  constructor(  private userService: UserService,
    private authService: AuthService,
    private route: Router,
    private routes: ActivatedRoute  ) {
  
  }

  ngOnInit() {
    this.message=new Message('danger', '')
    this.routes.queryParams.subscribe((params: Params)=>{
        if(params['nowCanLogin'])
        {
          this.showMessage({text: 'Поздраввляем Вы с нами', type: 'success'})
        }
        else if(params['accessDenied'])
        {
          this.showMessage({text: 'Залогинтесь', type: 'warning'})
        }
    });
  
    this.form=new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required , Validators.minLength(6)])
    });
  }
  showMessage(message: Message)
  {
      this.message=message;
      window.setTimeout(()=>{
        this.message.text='';
      }, 5000)
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
              this.authService.login();
              this.message.text='';
              window.localStorage.setItem('user', JSON.stringify(this.currentUser[0]));
                this.route.navigate(['/system', 'bill']);
             
             }
             else{
              this.showMessage({text: 'Пароль не верный', type: 'danger'})
             }
          }
          else{
            this.showMessage({text: 'Нет такого пользователя', type: 'danger'})
          }
        
        });
       
      
   }
}
