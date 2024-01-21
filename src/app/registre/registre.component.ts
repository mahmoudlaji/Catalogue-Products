import { Component, OnInit } from '@angular/core';
// import { UsersService } from '../services/users.service';
import { users } from '../model/user.model';
import { UsersService } from '../services/user.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
getData!:Array<users>
constructor(private usersService:UsersService){}
  ngOnInit(): void {
    this.getData =this.usersService.getUser()
    console.log("this.getData=>",this.getData)
  }
regUser= {
  email: "",
  password: "",
  role: "",
}
saveUser(){
this.usersService.addUser(this.regUser)
console.log('registered user => ',this.getData);
}



}