import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from './Services/auth.service';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  constructor(private _router:Router, private authService:AuthService) { }

  ngOnInit(): void {
  }

  
  form1=new FormGroup({
    accno:new FormControl([], Validators.minLength(12)),
  })

  dataid:any[]=[]
  Ongetdatabyid(form1:FormGroup)
  {
     this.authService.GetAccountDetails(form1.value).subscribe((dat:any)=>
     { 
    // console.log(this.form1.value);
     this.dataid=dat;
     console.log(this.dataid);
   });
  }
}
