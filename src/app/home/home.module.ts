import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule,homeComponents } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [HomeComponent,homeComponents],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ] 
})
export class HomeModule { }
