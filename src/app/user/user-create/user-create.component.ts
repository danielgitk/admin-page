import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {
  }
  onSignup(form: NgForm){
    if(form.invalid){
      return
    }
     this.userService.saveUser(form.value.email, form.value.password);
      console.log("after auth called");
    }
  //  this.authService.login();
  }


  



