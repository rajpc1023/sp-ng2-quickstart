import { Component, Input } from '@angular/core';
import { Transaction } from './Transaction';

@Component( {
  selector: 'tx-detail',
  templateUrl: 'app/tx/tx-detail.component.html'
} )
export class TxDetailComponent {
  @Input()
  tx:Transaction;

  @Input()
  accountHolder:string;

  switch(newHolder:string) {
    this.accountHolder = newHolder;
  }

  increment() {
    this.tx.amount += 1;
  }

}

