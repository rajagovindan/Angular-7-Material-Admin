import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private _authservice : AuthService,private router:Router){

  }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    
    /* let roles = route.data.roles;
    let isMatch =  this._authservice.roleMatch(roles);
    if(!isMatch)
     this.router.navigate[('/forbidden')];
      */
    return this._authservice.isLoggedIn();
    
  }
}
