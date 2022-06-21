import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { AccountstatementComponent } from './dashboard-component/accountstatement/accountstatement.component';
import { AccountDetailsComponent } from './dashboard-component/account-details/account-details.component';
import { AccountsummaryComponent } from './dashboard-component/accountsummary/accountsummary.component';
import { ChangeuseridpwdComponent } from './dashboard-component/changeuseridpwd/changeuseridpwd.component';
import { FundstransferComponent } from './dashboard-component/fundstransfer/fundstransfer.component';
import { UserprofileComponent } from './dashboard-component/userprofile/userprofile.component';
import { FormsModule  } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    DashboardComponentComponent,
    AccountstatementComponent,
    AccountDetailsComponent,
    AccountsummaryComponent,
    ChangeuseridpwdComponent,
    FundstransferComponent,
    UserprofileComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  exports:[DashboardComponentComponent]
})
export class DashboardModule { }
