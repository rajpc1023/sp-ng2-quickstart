import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Transaction } from './Transaction';
import { TransactionFilter } from './TransactionFilter';

@Component( {
  moduleId   : module.id,
  selector   : 'transactions-grid',
  templateUrl: 'transactions-grid.component.html',
  styles     : [ 'tbody tr, thead>tr:first-child>th { cursor: pointer}' ]
} )
export class TransactionsGridComponent implements OnInit {
  @Input()
  transactions: Transaction[];

  txFilter = new TransactionFilter();

  @Output()
  onSort = new EventEmitter<string>();

  @Output()
  onFilter = new EventEmitter<any>();

  @Output()
  onSelectTx = new EventEmitter<Transaction>();

  sortTable( field: string ) {
    this.onSort.emit( field );
  }

  filterTable() {
    if ( this.onFilter.observers.length === 0 ) {
      console.log( 'No filtering function!' );
    } else {
      this.onFilter.emit( this.txFilter );
    }
  }

  selectTx( tx ) {
    this.onSelectTx.emit( tx );
  }

  constructor() {
  }

  ngOnInit() {
  }

}
