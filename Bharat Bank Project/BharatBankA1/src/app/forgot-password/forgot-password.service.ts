import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private http:HttpClient) { }
  PostForgotPassword(form:FormGroup){
    return this.http.post('http://localhost:56931/api/ForgotPasswords/Insert',form,{responseType:"text"});
}}
