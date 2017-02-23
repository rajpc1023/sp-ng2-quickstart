import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Transaction } from '../tx/Transaction';

@Component( {
  moduleId: module.id,
  templateUrl: 'input-output.component.html'
} )
export class InputOutputComponent {
  @Input()
  tx: Transaction = new Transaction( {
    "id": 500,
    "payeeId": 47,
    "payee": {
      "id": 47,
      "payeeName": "Goodman, Lieber, Kurtzberg, Holliway",
      "categoryId": 13,
      "address": "16 W 12 St.",
      "city": "New York",
      "state": "NY",
      "zip": "10015",
      "image": "/images/animals/9.jpg",
      "motto": null
    },
    "amount": -35.77,
    "txType": "Withdrawal",
    "txStatus": "Cleared",
    "txDate": "2015-08-19T02:51:40.714",
    "accountId": 2,
    "categoryId": 13,
    "category": {
      "id": 13,
      "categoryName": "Legal"
    }
  } );

  @Output()
  refresh:EventEmitter<Transaction> = new EventEmitter<Transaction>();

  // Assume that in a more robust application this would call for a refresh
  // of transaction data.
  callRefresh(tx:Transaction) {
    this.refresh.emit( tx );
  }
}

