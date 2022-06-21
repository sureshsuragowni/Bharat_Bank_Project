import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FundTransfer } from "../models/fundTransfer";
import { Payee } from "../models/payee";

@Injectable()
export class FundTransferService {
  constructor(private httpClient: HttpClient) {
  }

  addIMPS(fundTransfer: FundTransfer) { 
    return this.httpClient.post('http://localhost:31293/api/FundTransfer/AddImpsDetails', fundTransfer);
  }

  getData(id: any) {
    return this.httpClient.get('http://localhost:31293/api/FundTransfer/GetDetails?id=' + id);
  }

  addBENEFICIARY(payee: Payee) {
    return this.httpClient.post('http://localhost:31293/api/FundTransfer/AddBeneficiaryDetails', payee);
  }
}