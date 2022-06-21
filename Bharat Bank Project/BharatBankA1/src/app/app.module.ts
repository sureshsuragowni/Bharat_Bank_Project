import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { OpenSavingsAccountComponent } from './open-savings-account/open-savings-account.component';
import { LoginComponent } from './login/login.component';
import { ForgotUserIdComponent } from './forgot-user-id/forgot-user-id.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactAtComponent } from './contact-at/contact-at.component';
import { FindAtmComponent } from './find-atm/find-atm.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    OpenSavingsAccountComponent,
    LoginComponent,
    ForgotUserIdComponent,
    ForgotPasswordComponent,
    SetNewPasswordComponent,
    HomePageComponent,
    ContactAtComponent,
    FindAtmComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
