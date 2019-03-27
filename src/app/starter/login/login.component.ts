import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Auth/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userData = {};

  constructor(private _authservice:AuthService,private router : Router) { }

  ngOnInit() {
  }

  login(){
   this._authservice.loginUser();
   this.router.navigate(['/home']);
   let currentUser = this._authservice.getUser();
  }

}
