import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //baseUrl="https://localhost:7107/api/"

  constructor(private http : HttpClient) { }

  // OnsubmitChangeUID(){
  //   return  this.http.post(this.baseUrl + 'ChangerUserIdPwd/GetListOfData',null,{responseType:"text"});//Bank is controller name and CreateBank is method name
   
  //  }

  //  //function to call Api
  //  gettabledata()
  //  {
     
  //    return this.http.get<any>('https://localhost:7107/api/ChangerUserIdPwd/GetAllData');
  //  }
  // //  GetData(form1:any)
  // //  {
     
  // //    return this.http.get<any>('https://localhost:7107/api/ChangerUserIdPwd/GetData/'+form1.accountNumber);
  // //  }



   UpdateUID(formupdates:any)
   {
     return this.http.put('https://localhost:7107/api/ChangerUserIdPwd/UpdateUID/'+formupdates.accountNumber,formupdates,{responseType:"text"});
   }
 

   
  //  InsertTableRow(formData:FormGroup){
  //    return this.http.post('https://localhost:7107/api/ChangerUserIdPwd/InsertTableRowData',formData,{responseType:"text"});
  //  }

  //  //credit
  //  CreditAmount(formcredit:any)
  //  {
    
  //    return this.http.put('https://localhost:7107/api/Account/Credit_to_Accno/'+formcredit.accno, formcredit,{responseType:"text"});
     
  //  }

  //  DebitAmount(formdebit:any)
  //  {
    
  //    return this.http.put('https://localhost:7107/api/Account/Debit/'+formdebit.accno, formdebit,{responseType:"text"});
     
  //  }
   
  //  GetAccountdata(formaccount:any)
  //  {
  //    return this.http.get('https://localhost:7107/api/Account/GetAccountdata/'+formaccount.accno);
  //  }


 
  
}
