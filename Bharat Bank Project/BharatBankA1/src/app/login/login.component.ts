import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name='BharatBank';

  constructor(private Auth3 : LoginService) { }

  ngOnInit(): void {
    
  }
  alertWithSuccess() {

    Swal.fire('Thank you...', 'Login succesfull!', 'success');

  }
  form =new FormGroup({
    //referLogId:new FormControl(),
    userID:new FormControl(),
    password:new FormControl('')
    })
    LoginInsert(form:FormGroup){
      console.log(form.value);
      this.Auth3.PostLogin(form.value).subscribe((res : any)=>{console.log(res);})}

}
