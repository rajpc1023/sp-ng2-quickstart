import { Component } from '@angular/core';
import { Transaction } from './Transaction';
import { TXS } from './mock-tx'

@Component( {
  selector   : 'tx-main',
  templateUrl: 'app/tx/tx-main.component.html'
} )
export class TxMainComponent {
  txs = TXS;
  detailTx: Transaction;

  setDetail( txId: number ) {
    console.log( 'TxMainComponent.setDetail(): ', txId );
    let foundTx: Transaction;
    this.txs.some( tx => {
      if ( tx.id === txId ) {
        foundTx = tx;
        return true;
      }
    } );

    this.detailTx = foundTx;
  }
}
