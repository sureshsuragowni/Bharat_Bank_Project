import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { ForgotPasswordService } from './forgot-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private auth5 : ForgotPasswordService) { }

  ngOnInit(): void {
  }
  alertWithSuccess() {

    Swal.fire('Thank you...', 'You submitted succesfully!', 'success');

  }
  form =new FormGroup({
    //referencePasswordId:new FormControl(),
    enterUserId:new FormControl(),
    emailId:new FormControl(''),
    enterOtp:new FormControl()
    })
    ForgotPasswordInsert(form:FormGroup){
      console.log(form.value);
      this.auth5.PostForgotPassword(form.value).subscribe((res : any)=>{console.log(res);})}

}
