import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountstatement',
  templateUrl: './accountstatement.component.html',
  styleUrls: ['./accountstatement.component.css']
})
export class AccountstatementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Onsubmit()
  {
    alert("You have clicked");
    
  }

}
