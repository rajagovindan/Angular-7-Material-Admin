import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from './intercept/token.interceptor';
import { AuthService } from "./Auth/auth.service";
import { starterComponents } from "./app-routing.module";
import { MaterialModule } from "./material/material.module";
import { ErrorDialogComponent } from "./error-dialog/errordialog.component";
import { ErrorDialogService } from "./error-dialog/errordialog.service";
@NgModule({
  declarations: [
    AppComponent,
    starterComponents,
    ErrorDialogComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports:[MaterialModule],
  providers: [AuthService,
    ErrorDialogService,
    {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true}
  ],
  entryComponents:[ErrorDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
