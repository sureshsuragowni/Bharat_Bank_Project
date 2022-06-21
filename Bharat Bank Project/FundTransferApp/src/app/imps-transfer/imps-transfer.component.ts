import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FundTransfer } from '../models/fundTransfer';
import { FundTransferService } from '../services/fundTransfer.service';

@Component({
  selector: 'app-imps-transfer',
  templateUrl: './imps-transfer.component.html',
  styleUrls: ['./imps-transfer.component.css']
})
export class ImpsTransferComponent implements OnInit {
  fundTransfer: any;
  data2: any;
  dateTime: any;
  constructor(private fundTransferService: FundTransferService, private router: Router) {

    this.fundTransfer = new FundTransfer();
    this.data2 = new FundTransfer();
  }

  ngOnInit(): void {
    this.dateTime = new Date();
  }

  addImps() {
    this.fundTransferService.addIMPS(this.fundTransfer).subscribe(data => {
      this.data2 = data;
      this.router.navigateByUrl("confirm/" + this.data2.id);
    });
  }

  reset() {
    this.fundTransfer = " ";
  }

  addnew() {
    this.router.navigate(['../beneficiary']);
  }
}
