import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-data-users',
  templateUrl: './data-users.component.html',
  styleUrls: ['./data-users.component.css']
})
export class DataUsersComponent implements OnInit{
  usersData!:any

  constructor( private apiservice:ApiService) { }
  ngOnInit(): void {
  this.usersData = this.apiservice.getAllUsers().subscribe(
    (result:any)=>{
      this.usersData = result
    }
  )
  }

}
