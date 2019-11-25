import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from "src/app/shared/sevices/UserService";
import { User } from 'src/app/shared/models/user.models';
import { Message } from 'src/app/shared/models/message.model';

@Component({
  selector: 'wfm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   form: FormGroup;
  currentUser: User;
  message: Message;
  constructor(  private userService: UserService) {
  
  }

  ngOnInit() {
    this.message=new Message('danger', '')
    this.form=new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required , Validators.minLength(6)])
    });
  }
  showMessage(text: string, type: string='danger')
  {
      this.message=new Message(type, text);
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
              this.showMessage('Ура')
             }
             else{
              this.showMessage('Пароль не верный')
             }
          }
          else{
            this.showMessage('Нет такого пользователя')
          }
        
        });
       
      
   }
}
