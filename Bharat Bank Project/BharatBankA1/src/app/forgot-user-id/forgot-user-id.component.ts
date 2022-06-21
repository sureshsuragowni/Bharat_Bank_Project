import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { ForgotUserIdService } from './forgot-user-id.service';

@Component({
  selector: 'app-forgot-user-id',
  templateUrl: './forgot-user-id.component.html',
  styleUrls: ['./forgot-user-id.component.css']
})
export class ForgotUserIdComponent implements OnInit {

  constructor(private Auth4: ForgotUserIdService) { }

  ngOnInit(): void {
  }
  alertWithSuccess() {

    Swal.fire('Thank you...', 'You submitted succesfully!', 'success');

  }
  form =new FormGroup({
    //referenceUserId:new FormControl(),
    accountNumber:new FormControl(),
    emailId:new FormControl(''),
    otp:new FormControl()
    })
    ForgotUserIdInsert(form:FormGroup){
      console.log(form.value);
      this.Auth4.PostForgotUserId(form.value).subscribe((res : any)=>{console.log(res);})}
}
