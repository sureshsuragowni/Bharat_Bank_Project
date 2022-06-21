import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  GetAccountDetails(form1:any)
   {
     
     return this.http.get('https://localhost:7107/api/AccountDetails/GetAccountdetails/'+form1.accno);
   }
}
