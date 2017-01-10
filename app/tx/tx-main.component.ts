import { Component } from '@angular/core';
import { Transaction } from './Transaction';

@Component({
  selector: 'tx-main',
  templateUrl: 'app/tx/tx-main.component.html'
})
export class TxMainComponent {
  accountHolder = 'John';
  detailTx = new Transaction( {
    "id"      : 1,
    "payeeId"   : 17,
    "payee"     : {
      "payeeId"   : 17,
      "payeeName" : "Bauch-Stehr Medical Partners",
      "categoryId": 8,
      "address"   : "671 York Ave",
      "city"      : "Baltimore",
      "state"     : "MD",
      "zip"       : "54952",
      "image"     : "/images/business/3.jpg",
      "motto"     : "Versatile optimizing support",
      "txs"       : null
    },
    "amount"    : -97.74,
    "txType"    : "Debit",
    "txStatus"  : "Cleared",
    "txDate"    : "2015-01-04T23:50:19.938",
    "accountId" : 1,
    "categoryId": 8,
    "category"  : {
      "categoryId"  : 8,
      "categoryName": "Health",
      "txs"         : null
    }
  } )

}
