import { Component, OnInit } from '@angular/core';

import { users } from '../model/user.model';
import { Router } from '@angular/router';
import { UsersService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alert!:boolean

constructor(private loginService:UsersService, private routelog:Router){}
  ngOnInit(): void {
   
  }

loginData ={
  email: "",
  password: "",
  role:""
}
onSubmit(){
  let verfy=this.loginService.login(this.loginData)
 if (verfy) {
  this.routelog.navigateByUrl("/products")
  this.alert=false
 }else{
  this.alert=true
 }

}
}