import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotUserIdComponent } from './forgot-user-id/forgot-user-id.component';
import { LoginComponent } from './login/login.component';
import { OpenSavingsAccountComponent } from './open-savings-account/open-savings-account.component';
import { RegisterComponent } from './register/register.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';

const routes: Routes = [{
  component:OpenSavingsAccountComponent,
  path:'OpenSavingsAccount'
},
{
 component:RegisterComponent,
 path:'Register'
},
{
  component:LoginComponent,
  path:'Login'
},
{
  component:ForgotUserIdComponent,
  path:'ForgotUserId'
},
{
  component:ForgotPasswordComponent,
  path:'ForgotPassword'
},
{
  component:SetNewPasswordComponent,
  path:'SetNewPassword'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
