import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class OpenSavingsAccountService {

  constructor(private http:HttpClient) { }
  PostOpenSavingsAccount(form:FormGroup){
    return this.http.post('http://localhost:56931/api/OpenSavingsAccounts/Insert',form,{responseType:"text"});
}}
