import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ForgotUserIdService {

  constructor(private http:HttpClient) { }
  PostForgotUserId(form:FormGroup){
    return this.http.post('http://localhost:56931/api/ForgotUserIds/Insert',form,{responseType:"text"});
}}
