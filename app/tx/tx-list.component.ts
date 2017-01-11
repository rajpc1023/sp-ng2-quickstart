import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Transaction } from './Transaction';

@Component( {
  selector   : 'tx-list',
  templateUrl: 'app/tx/tx-list.component.html',
  styles     : [
    `li {
cursor: pointer
}
li:hover {
background-color: aqua;
}
.selectedBG {
background-color: yellow;
}

.selectedText {
color: red;
font-weight: bold;
}
`
  ]
} )
export class TxListComponent {
  @Input()
  txs: Transaction[];

  @Output()
  pick = new EventEmitter<number>();

  selectedTx: Transaction;

  setClasses(tx:Transaction) {
    if (tx === this.selectedTx) {
      return 'selectedBG selectedText';
    }
  }

  tellParent( tx: Transaction ) {
    console.log( 'Clicked on tx# ', tx.id );
    this.selectedTx = tx;
    this.pick.emit( tx.id );
  }

  txTrackBy( index: number, tx: Transaction ) {
    return tx.id;
  }
}
