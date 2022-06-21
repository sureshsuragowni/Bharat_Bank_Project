import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { SetNewPasswordService } from './set-new-password.service';

@Component({
  selector: 'app-set-new-password',
  templateUrl: './set-new-password.component.html',
  styleUrls: ['./set-new-password.component.css']
})
export class SetNewPasswordComponent implements OnInit {

  constructor(private Auth6 : SetNewPasswordService) { }

  ngOnInit(): void {
  }
  alertWithSuccess() {

    Swal.fire('Thank you...', 'You submitted succesfully!', 'success');

  }
  form =new FormGroup({
    //referenceNewId:new FormControl(),
    userId:new FormControl(),
    oldPassword:new FormControl(''),
    newPassword:new FormControl(''),
    confirmNewPassword:new FormControl('')
    })
    SetNewPasswordInsert(form:FormGroup){
      console.log(form.value);
      this.Auth6.PostSetNewPassword(form.value).subscribe((res : any)=>{console.log(res);})}

}
