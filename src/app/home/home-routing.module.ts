import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { AuthGuard } from "../Auth/auth.guard";
import { CardsComponent } from './cards/cards.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home.component';

const routes: Routes = [ 
{
  path:'',
  component:HomeComponent,
  children:[
    {
      path: '',
      redirectTo: 'users',
      pathMatch: 'full',
    },
    {
      path:'cards',
      component:CardsComponent
    },
    {
      path:'users',
      component:UsersComponent,
      canActivate:[AuthGuard]
    }
  ]
}
];

export const homeComponents = [CardsComponent,UsersComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
