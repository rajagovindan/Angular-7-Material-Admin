import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  ngOnInit() {
  }constructor(private _authService : AuthService){

  }
  
  logout(){
    this._authService.logout();
  }
  

}
