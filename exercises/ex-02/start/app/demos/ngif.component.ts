import { Component, OnInit } from '@angular/core';
import { Transaction } from '../tx/Transaction'

@Component( {
  moduleId: module.id,
  selector: 'demo-ngif',
  template: `<h2>Demo: Conditionally displaying data</h2>
<ul *ngIf="tx">
<li>Transaction id: {{ tx.id }}</li>
<li>Payee Name: {{ tx.payee.payeeName }}</li>
<li *ngIf="tx.category.categoryName">Category: {{ tx.category.categoryName }}</li>
<li>Amount: {{ tx.amount | currency:'USD':true }}</li>
<li>Date: {{ tx.txDate | date:'yyyy-MM-dd' }}</li>
</ul>`
} )
export class DemoNgIfComponent implements OnInit {

  tx: Transaction;

  constructor() {
    // No code here
  }

  ngOnInit() {
    setTimeout( () => {
      this.tx = new Transaction( {
        "id"        : 500,
        "payeeId"   : 47,
        "payee"     : {
          "id"        : 47,
          "payeeName" : "Goodman, Lieber, Kurtzberg, Holliway",
          "categoryId": 13,
          "address"   : "16 W 12 St.",
          "city"      : "New York",
          "state"     : "NY",
          "zip"       : "10015",
          "image"     : "/images/animals/9.jpg",
          "motto"     : null
        },
        "amount"    : -35.77,
        "txType"    : "Withdrawal",
        "txStatus"  : "Cleared",
        "txDate"    : "2015-08-19T02:51:40.714",
        "accountId" : 2,
        "category"  : {
          "categoryName": "Legal",
          "id"          : 13
        },
        "categoryId": 13
      } )
    }, 1000 )
  }

}
