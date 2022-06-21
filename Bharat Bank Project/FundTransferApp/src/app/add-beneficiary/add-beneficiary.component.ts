import { Component, OnInit } from '@angular/core';
import { FundTransfer } from '../models/fundTransfer';
import { FundTransferService } from '../services/fundTransfer.service';
import { Payee } from '../models/payee';
import { CheckboxRequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css']
})
export class AddBeneficiaryComponent implements OnInit {
payee:any;
chk:any;

  constructor(private fundTransferService:FundTransferService) {
this.payee=new Payee();


   }

  ngOnInit(): void {
  }

  addBeneficiary(){
    if(this.payee.beneficiaryAccountNumber!=this.payee.rebeneficiaryAccountNumber){
      alert("Account Mismatch or Forgot to save beneficiary");
      this.payee="";
    }
    else{
      this.fundTransferService.addBENEFICIARY(this.payee).subscribe();
      alert("Added");
    }
    
  }

}
