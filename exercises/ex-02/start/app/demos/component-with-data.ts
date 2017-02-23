import { Component } from '@angular/core';
import { Transaction } from '../tx/Transaction';

@Component( {
  selector: 'transactions-list',
  template: `<h1>Transaction Detail Component</h1>
<ul>
<li>Transaction id: {{ tx.id }}</li>
<li>Payee Name: {{ tx.payee.payeeName }}</li>
<li>Amount: {{ tx.amount | currency:'USD':true }}</li>
<li>Date: {{ tx.txDate | date:'yyyy-MM-dd' }}</li>
</ul>
`
} )
export class ComponentWithDataComponent {
  tx: Transaction = new Transaction( {
    "id"          : 1,
    "payeeId"     : 17,
    "payee"       : { payeeName: "Bauch-Stehr Medical Partners" },
    "amount"      : -97.74,
    "txType"      : "Debit",
    "txStatus"    : "Cleared",
    "txDate"      : "2015-01-04T23:50:19.938",
    "accountId"   : 1,
    "categoryId"  : 8,
    "categoryName": "Health",
  } );
}

