import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }
  PostLogin(form:FormGroup){
    return this.http.post('http://localhost:56931/api/Logins',form,{responseType:"text"});
}}
