import { Timestamp } from "rxjs";

export class FundTransfer{
    constructor(public id?:number,public referenceId?:number,public fromAccount?:string,public toAccount?:string,public amount?:number,public transactionTime?:Date,public maturityInstruction?:string,public remark?:string,public mode?:string) {
    }
}


