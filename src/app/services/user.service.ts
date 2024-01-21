import { Injectable } from '@angular/core';
import {  users } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
userData!:Array<users>
  constructor() {
    this.userData= [
      {email:'mido@gmail.com',password:'123',role:'Admin'},
      {email:'zidane@gmail.com',password:'000',role:'Admin'},
      {email:'mamadou@gmail.com',password:'111',role:'user'},
    ]
   }
  //  renvoiyer ts nos donnees users 
   getUser(){
    return this.userData;
   }
  // ajouter un nouveau user
   addUser(data:users){
    this.userData.push(data);
   }
  //  pour comparer email et password avec notre users Data
  login(data:users){
    for (let user of this.userData) {
     if ((user.email ===data.email) && (user.password ===data.password)) {
      return true
     }
    }return false
  }

}