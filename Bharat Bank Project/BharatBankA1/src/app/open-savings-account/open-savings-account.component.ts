import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { OpenSavingsAccountService } from './open-savings-account.service';

@Component({
  selector: 'app-open-savings-account',
  templateUrl: './open-savings-account.component.html',
  styleUrls: ['./open-savings-account.component.css']
})
export class OpenSavingsAccountComponent implements OnInit {

  constructor(private Auth : OpenSavingsAccountService) { }

  ngOnInit(): void {
  }
  alertWithSuccess() {

    Swal.fire('Thank you...', 'Your Data Has Been Saved', 'success');

  }
  form = new FormGroup({
    //referenceId : new FormControl(),
    title : new FormControl(''),
    firstName : new FormControl(''),
    middleName : new FormControl(''),
    lastName : new FormControl(''),
    fatherName : new FormControl(''),
    husbandName : new FormControl(''),
    emailId : new FormControl(''),
    mobileNumber : new FormControl(),
    aadharCardNumber : new FormControl(),
    dateOfBirth : new FormControl(''),
    addressLine1 : new FormControl(''),
    addressLine2 : new FormControl(''),
    landMark : new FormControl(''),
    state : new FormControl(''),
    city : new FormControl(''),
    pinCode : new FormControl(),
    sourceOfIncome : new FormControl(''),
    grossAnnualSalary : new FormControl()
  })
  OpenSavingsAccountInsert(form:FormGroup){
    console.log(form.value);
    this.Auth.PostOpenSavingsAccount(form.value).subscribe((res : any)=>{console.log(res);})}

}
