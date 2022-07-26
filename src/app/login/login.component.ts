import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // properties / variable declaration
   aim = 'Your Perfect Banking Partner'

  account = 'Account number here'
//to hold user account number
  acno=""
//to hold user password 
pswd=""
 
  //constructor - Dependency Injection
  constructor(private router:Router,private ds:DataService) { }

  //life cycle hook - angular
  ngOnInit(): void {
  }

  //user defined function

  //login()
  login(){
    var acno = this.acno
    var pswd = this.pswd
//calling login - dataService
   const result = this.ds.login(acno,pswd)
      if(result){
        alert('Login successful')
        this.router.navigateByUrl('dashboard')
      }
    }
}
