import { NgModule, TRANSLATIONS_FORMAT } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpsTransferComponent } from './imps-transfer/imps-transfer.component';
// import { NeftTransferComponent } from './neft-transfer/neft-transfer.component';
// import { RtgsTransferComponent } from './rtgs-transfer/rtgs-transfer.component';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { TransferConfirmationComponent } from './transfer-confirmation/transfer-confirmation.component';
import { MenuFundComponent } from './menu-fund/menu-fund.component';

const routes: Routes = [

  {path:'imps',component:ImpsTransferComponent},
  {path:'beneficiary',component:AddBeneficiaryComponent},
  {path:'confirm/:pid',component:TransferConfirmationComponent},
  {path: 'menu', component:MenuFundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
