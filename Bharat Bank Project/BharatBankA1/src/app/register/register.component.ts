import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  

  constructor(private Auth : RegisterService) { }

  ngOnInit(): void {
  }
  alertWithSuccess()
  {
    Swal.fire('Thank you...', 'Signup succesfull!', 'success');
  }
  form =new FormGroup({
    userId:new FormControl(),
    loginPassword:new FormControl(''),
    confirmLoginPassword:new FormControl(''),
    emailId:new FormControl(''),
    mobileNumber:new FormControl()
    })
    RegisterInsert(form:FormGroup){
      console.log(form.value);
      this.Auth.PostRegister(form.value).subscribe((res : any)=>{console.log(res);})}
      getData(){
        this.Auth.GetRegisters().subscribe((data)=>{console.log(data)});
      }
      
    }
  

    


