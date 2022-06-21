import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-fund',
  templateUrl: './menu-fund.component.html',
  styleUrls: ['./menu-fund.component.css']
})
export class MenuFundComponent implements OnInit {
  fullname ='deepak vaswani'

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

 payeePage(){
   this.router.navigate(['../beneficiary']);
 }

 fundPage(){
   this.router.navigate(['../imps']);
 }

}
