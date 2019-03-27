import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './starter/login/login.component';
import { RegisterComponent } from './starter/register/register.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'home',
    loadChildren:"./home/home.module#HomeModule"
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

export const starterComponents = [LoginComponent,RegisterComponent,PageNotFoundComponent];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
