import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImpsTransferComponent } from './imps-transfer/imps-transfer.component';
import { FundTransferService } from './services/fundTransfer.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NeftTransferComponent } from './neft-transfer/neft-transfer.component';
// import { RtgsTransferComponent } from './rtgs-transfer/rtgs-transfer.component';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { MenuFundComponent } from './menu-fund/menu-fund.component';
import { TransferConfirmationComponent } from './transfer-confirmation/transfer-confirmation.component';



@NgModule({
  declarations: [
    AppComponent,
    ImpsTransferComponent,
    // NeftTransferComponent,
    // RtgsTransferComponent,
    AddBeneficiaryComponent,
    MenuFundComponent,
    TransferConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    
    
  ],
  providers: [FundTransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
