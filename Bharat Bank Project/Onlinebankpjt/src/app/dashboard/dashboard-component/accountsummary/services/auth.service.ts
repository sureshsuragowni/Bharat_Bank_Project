import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  // GetData(form1:any)
  // {
    
  //   return this.http.get<any>('https://localhost:7107/api/ChangerUserIdPwd/GetData/'+form1.accountNumber);
  // }

  GetAccountSummary(form1:any)
   {
    
     return this.http.get<any>('https://localhost:7107/api/AccountDetails/GetAccountSummary/'+form1.accno);
  }
}
