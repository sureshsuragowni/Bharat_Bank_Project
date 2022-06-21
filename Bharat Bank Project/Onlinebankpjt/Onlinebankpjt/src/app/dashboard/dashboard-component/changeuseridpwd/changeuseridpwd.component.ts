import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { AuthService } from './Services/auth.service';
import { HttpClient } from '@angular/common/http';

import { FormBuilder, FormArray } from '@angular/forms';
@Component({
  selector: 'app-changeuseridpwd',
  templateUrl: './changeuseridpwd.component.html',
  styleUrls: ['./changeuseridpwd.component.css']
})
export class ChangeuseridpwdComponent implements OnInit {
  

  constructor(private  authService: AuthService , private http:HttpClient) {}
  
 
  ngOnInit() {
    
    
    
  }

  displaymsg:string="";
  IsAccountCreated:boolean=false;

  otp:any;

  // apasswordupdate:any
  // passwordupdate:any
  // cpasswordupdate:any;
  // tpasswordupdate:any;
  // ctpasswordupdate:any;
  // enterotpupdate:any;

  // passwordinsert:any;
  // password:any
  // cpasswordinsert:any;
  // tpasswordinsert:any;
  // ctpasswordinsert:any;
  // otpinsert:any;


  
  

  

//  data1:any

//   onSubmitform(){
   
//     this.authService.OnsubmitChangeUID().subscribe(res=>
//       console.log(res));
//       console.log(this.form.value);
      

//   }
 
//    Ongetdata()
//    {
//    this.authService.gettabledata().subscribe((data)=>{
//      console.log(data);
//      this.data1=data;
//    });
//    }
 
//    d1:any
//    DatInsert(form:FormGroup)
//    {
//      console.log(form.value)
//     this.authService.InsertTableRow(form.value).subscribe(
//     (res)=>{
//       if(res=="success"){
//         this.displaymsg="Account Created Successfully";
//         this.IsAccountCreated=true;

//       }else if(res=='Already Exist'){
//         this.displaymsg="Account Already Exist try again";
//         this.IsAccountCreated=false;
//       }else{
//         this.displaymsg="Something went wrong";
//         this.IsAccountCreated=false;
//       }
//     }
//   )
//    }


  //  data2:any
  //  AccId:any;
  //  AccIndex:any;
  //  updatedata(updatedata:any)
  //  {
  //    console.log(updatedata);
  //    this.apasswordupdate=updatedata.accountNumber;
  //    this.passwordupdate=updatedata.loginPassword;//<!-- here loginPassword get from api run-->
  //    this.cpasswordupdate=updatedata.confirmLoginPassword;
  //    this.tpasswordupdate=updatedata.transactionPassword;
  //    this.ctpasswordupdate=updatedata.confirmTransactionPassword;
  //    this.otp=updatedata.enterOtp;
  //    this.AccId=updatedata.accountNumber;
    
  //  }
 


  formupdates = new FormGroup({
    accountNumber:new FormControl('',Validators.minLength(12)),
    loginPassword:new FormControl('',Validators.minLength(12)),
    confirmLoginPassword:new FormControl('',Validators.minLength(12))
   
    
  })
   
  DatUpdates(formupdates:FormGroup)
   {
    
    this.authService.UpdateUID(formupdates.value).subscribe(
    
     (res)=>{
      if(res=="success"){
        this.displaymsg="Account Updated Successfully";
        this.IsAccountCreated=true;

      }else{
        this.displaymsg="Something went wrong";
        this.IsAccountCreated=false;
      }
    });
     
   }

  // dataid:any[]=[]
  //  Ongetdatabyid(form1:FormGroup)
  //  {
  //     this.authService.GetData(form1.value).subscribe((dat:any)=>
  //     { 
  //    // console.log(this.form1.value);
  //     this.dataid=dat;
  //     console.log(this.dataid);
  //   });
  //  }





   //credit part

  //  formcredit= new FormGroup({
  //   accno:new FormControl('', Validators.minLength(12)),
  //   creditamount:new FormControl('',[Validators.required , Validators.minLength(4)])
  //  });

  //  OnCredit(formcredit:FormGroup){
  //    this.authService.CreditAmount(formcredit.value).subscribe(
  //     (res)=>{
  //       if(res=="success"){
  //         this.displaymsg="Account Updated Successfully";
  //         this.IsAccountCreated=true;
  
  //       }else{
  //         this.displaymsg="Something went wrong";
  //         this.IsAccountCreated=false;
  //       }
  //     });
   }


//debit

// formdebit= new FormGroup({
//   accno:new FormControl('', Validators.minLength(12)),
//   debitamount:new FormControl('',[Validators.required , Validators.minLength(4)])
//  });

//  OnDebit(formdebit:FormGroup){
//    this.authService.DebitAmount(formdebit.value).subscribe(
//     (res)=>{
//       if(res=="success"){
//         this.displaymsg="Account Updated Successfully";
//         this.IsAccountCreated=true;

//       }else{
//         this.displaymsg="Something went wrong";
//         this.IsAccountCreated=false;
//       }
//     });
//  }


//  //fetch account data

//  formaccount= new FormGroup({
//   accno:new FormControl('', Validators.minLength(12)),
//   debitamount:new FormControl('',[Validators.required , Validators.minLength(4)])
//  });

//  dataids:any
//  Ongetdataaccount(formaccount:FormGroup)
//  {
//    this.authService.GetAccountdata(formaccount.value).subscribe((data)=>{
//     console.log(data);
//     this.dataids=data;
//   });
//  }


  

