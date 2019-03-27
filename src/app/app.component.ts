import { Component } from '@angular/core';
import { AuthService } from './Auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cards';

  constructor(private _authService : AuthService){

  }
  
  logout(){
    this._authService.logout();
  }
  onSubmit(){
    console.log('ng-content');
  }
}

