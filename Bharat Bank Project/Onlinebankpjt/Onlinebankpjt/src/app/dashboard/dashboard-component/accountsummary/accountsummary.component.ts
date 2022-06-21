import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-accountsummary',
  templateUrl: './accountsummary.component.html',
  styleUrls: ['./accountsummary.component.css']
})
export class AccountsummaryComponent implements OnInit {

  constructor(private _router:Router, private authService:AuthService) { }

  ngOnInit(): void {
  }

  // 
  
  form1=new FormGroup({
    accno:new FormControl([], Validators.minLength(12)),
  })

  dataid:any[]=[]
  Ongetdatabyid(form1:FormGroup)
  {
     this.authService.GetAccountSummary(form1.value).subscribe((dat:any)=>
     { 
    // console.log(this.form1.value);
     this.dataid=dat;
     console.log(this.dataid);
   });
  }
}
