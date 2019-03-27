import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import * as _ from 'lodash'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users:any = [];
  public errors:any;
  constructor(private _usersService : UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this._usersService.getUsers()
        .subscribe(
          data =>{ this.users = data;},
          error =>{this.errors = error;}
        )
  }
 
  OnEdit(i:number){
    console.log(this.users[i]);
  }

  OnDelete(i:number){
    let user = this.users.splice(i,1);
    console.log(user);
  }
}
