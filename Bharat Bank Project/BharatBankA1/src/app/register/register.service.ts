import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  //formData:Register = new Register(); //in ts new keyword will return emplty object so we need to initialize the object
  PostRegister(form:FormGroup){
  return this.http.post('http://localhost:56931/api/Registers/Insert',form,{responseType:"text"});
  //console.log(form.value);
  }
  GetRegisters(){
    return this.http.get<any>('http://localhost:56931/api/Registers');
  }
}
