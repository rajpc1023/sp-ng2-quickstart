import { Component, Input, OnChanges } from '@angular/core';
import { Transaction } from './Transaction';

@Component( {
  selector: 'tx-detail',
  templateUrl: 'app/tx/tx-detail.component.html'
} )
export class TxDetailComponent implements OnChanges{
  @Input()
  tx:Transaction;

  ngOnChanges() {
    console.log('TxDetailComponent.onChanges(): something has changed.')
  }

}

