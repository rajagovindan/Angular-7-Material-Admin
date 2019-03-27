import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import * as _ from "lodash";
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../Auth/auth.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  public numbers = [2,1,1,2,3,4,6];
  
  constructor(private fb: FormBuilder,private http:HttpClient,private __authService : AuthService) { }
  
  ngOnInit() {
  //  this.lodashConcepts();
  }

  
  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: []
    })
  })

  onSubmit() {
      this.http.get('https://jsonplaceholder.typicode.com/users')
        .subscribe(
          success => { console.log(success) },
          //error=>{console.log(error)}
        );

  }

  lodashConcepts(){

    //uniq - remove duplicate objects
    let number = _.uniq(this.numbers);
    console.log(number);

    //filter
    var users = [
      { 'user': 'barney', 'age': 36, 'active': false },
      { 'user': 'fred',   'age': 40, 'active': true },
      { 'user': 'fred',   'agd': 40, 'active': true }
    ];

    let user1 = _.filter(users,function(o){ 
       return o.active;
    });
    console.log(user1);

    let user2 = _.filter(users,['active',true]);
    console.log(user2);

    let user3 = _.filter(users,'age');

    console.log(user3);
   
    //map

    let map = _.map(users,'active');
    console.log(map);

  }


}
