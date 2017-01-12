import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Transaction } from './Transaction';
import { TransactionDAO } from './tx-dao.service';
import { Subscription } from 'rxjs';

@Component( {
  selector   : 'tx-main',
  templateUrl: 'app/tx/tx-main.component.html'
} )
export class TxMainComponent implements OnInit, OnDestroy, OnChanges {
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
    console.log( 'TxMainComponent has been destroyed.' );
    this.subscription.unsubscribe();
  }

  ngOnChanges() {
    console.log( 'TxMainComponent.onChanges(): something has changed.' )
  }

  setDetail( txId: number ) {
    console.log( 'TxMainComponent.setDetail(): ', txId );
    this.dao.findById( txId )
      .then( tx => this.detailTx = tx );
  }
}
