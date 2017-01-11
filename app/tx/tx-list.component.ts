import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Transaction } from './Transaction';

@Component( {
  selector   : 'tx-list',
  templateUrl: 'app/tx/tx-list.component.html'
} )
export class TxListComponent {
  @Input()
  txs:Transaction[];

  @Output()
  pick = new EventEmitter<number>();

  tellParent(tx:Transaction) {
    console.log( 'Clicked on tx# ', tx.id );
    this.pick.emit( tx.id );
  }

  txTrackBy(index:number, tx:Transaction) {
    return tx.id;
  }
}
