import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { first } from "rxjs/operators";
import { AuthService } from "../auth.service";
import { UserService } from "../user.service"
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService
    , private userService: UserService) { }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.userService.login(this.loginForm.value).subscribe(data => {
      if(data){
        this.router.navigate(['list-user']);
        localStorage.removeItem("loginUserId");
        localStorage.setItem("loginUserId", data['id']);
      }else{
       
        this.invalidLogin = true;
      }
        // if (this.loginForm.controls.email.value == data['email'] && this.loginForm.controls.pwd.value == data['pwd']) {
        //   this.router.navigate(['list-user']);
        // } else {
        //   this.invalidLogin = true;
        // }
    })

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      pwd: ['', Validators.required]
    });
  }
}
