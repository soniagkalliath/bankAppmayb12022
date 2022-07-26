import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  //login Acno
  acno:any
  //to hold transaction array
  transaction:any

  constructor(private ds:DataService) {
    //get login acno from data service
    this.acno  = this.ds.currentAcno
    // get transaction array from data service
    this.transaction = this.ds.getTransaction(this.acno)
    console.log(this.transaction);
    
   }

  ngOnInit(): void {
  }

}
