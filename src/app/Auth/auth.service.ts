import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import * as _ from "lodash";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }


  loginUser() {
    localStorage.setItem("token", "welcome");
    this.setUser();
  }

  setUser() {
    let currentUser = {
      "UserName": "Raja",
      "token": "Bearer zxjdjaa",
      "roles": ['admin'],
      "permissions": ["forms","users"]
    }
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }

  getUser() {
    let userInfo = localStorage.getItem("currentUser");
    let currentUser = JSON.parse(userInfo);
    return currentUser;
  }

  roleMatch(value): Boolean {
    let isMatch = false;
    let userInfo = this.getUser();
    let userPermission = userInfo.permissions;
    isMatch = userPermission.includes(value)
    return isMatch;
  }

  isLoggedIn(): boolean {
    let token = localStorage.getItem("token");
    if (token) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
    
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn();
  }
}
