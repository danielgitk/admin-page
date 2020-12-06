import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  isLoading =  false;
  constructor(private authService: AuthService) {}


  onLogin(form: NgForm){
   if (form.invalid){
     return
   }
  //this.isLoading = true;
  
   this.authService.login(form.value.username, form.value.password);
   console.log("tenestual");
   
   console.log(form.value.username);
   console.log(form.value.password);
  }


 

}
