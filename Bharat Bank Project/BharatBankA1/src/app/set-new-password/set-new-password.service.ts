import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SetNewPasswordService {

  constructor(private http:HttpClient) { }
  PostSetNewPassword(form:FormGroup){
    return this.http.post('http://localhost:56931/api/SetNewPasswords/Insert',form,{responseType:"text"});
}}
