import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FundTransfer } from '../models/fundTransfer';
import { FundTransferService } from '../services/fundTransfer.service';

@Component({
  selector: 'app-transfer-confirmation',
  templateUrl: './transfer-confirmation.component.html',
  styleUrls: ['./transfer-confirmation.component.css']
})
export class TransferConfirmationComponent implements OnInit {
  fundTransfer:any;
  sid:number;
  constructor(private fundTransferService:FundTransferService,private router:Router,private route:ActivatedRoute) {
    this.fundTransfer=new FundTransfer();
    this.sid=this.route.snapshot.params["pid"];
    this.getConfirmed(this.sid);
   }

  ngOnInit(): void {
  }

  getConfirmed(cid:any){
        this.fundTransferService.getData(cid).subscribe(data=>{
            this.fundTransfer=data as FundTransfer;

        });
  }

  direct(){
    this.router.navigate(['../beneficiary']);
  }

}
