import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccountDetailsComponent } from './dashboard/dashboard-component/account-details/account-details.component';
import { AccountstatementComponent } from './dashboard/dashboard-component/accountstatement/accountstatement.component';
import { AccountsummaryComponent } from './dashboard/dashboard-component/accountsummary/accountsummary.component';
import { ChangeuseridpwdComponent } from './dashboard/dashboard-component/changeuseridpwd/changeuseridpwd.component';
import { FundstransferComponent } from './dashboard/dashboard-component/fundstransfer/fundstransfer.component';
import { UserprofileComponent } from './dashboard/dashboard-component/userprofile/userprofile.component';

const routes: Routes = [
  {
    path:'Accstmt', component:AccountstatementComponent
  },
  {
    path:'Accsmry', component:AccountsummaryComponent
  },
  {
    path:'Chgusr', component:ChangeuseridpwdComponent
  },
  {
    path:'Fnds', component:FundstransferComponent
  },
  {
    path:'userp',component:UserprofileComponent
  },
  {
    path:'Accdtls',component:AccountDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
