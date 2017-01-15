import { Component, OnInit, OnDestroy } from '@angular/core';
import { Transaction } from './Transaction';
import { TransactionDAO } from './tx-dao.service';
import { Subscription } from 'rxjs';

@Component( {
  selector   : 'tx-main',
  templateUrl: 'app/tx/tx-main.component.html'
} )
export class TxMainComponent implements OnInit, OnDestroy {
  detailTx: Transaction;
  txs: Transaction[];
  subscription: Subscription;

  constructor( private dao: TransactionDAO ) {
  }

  ngOnInit(): void {
    console.log( 'TxMainComponent.onInit()' );

    this.subscription = this.dao.all()
      .subscribe( txs => {
        this.txs = txs
      }, err => {
        console.error( "TxMainComponent DAO error, message: ", err.msg );
      } );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setDetail( txId: number ) {
    this.dao.findById( txId )
      .then( tx => this.detailTx = tx );
  }
}
