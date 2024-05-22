import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { AccountService } from '../_services/account.service';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  model: any ={};
 

  constructor(public accountService : AccountService ) {}
  
  ngOnInit(): void {
  
  }

  
  

  login() {
    this.accountService.login(this.model).subscribe({
      next: responce =>{
        console.log(responce);
        
      },
      error: error => console.log(error)
    })
  }

 logout(){
  this.accountService.logout();
  

 }

}
