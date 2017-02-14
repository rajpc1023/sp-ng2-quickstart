import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Transaction } from './Transaction';
import { TransactionsDAO } from './transactions-dao.service';

import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component( {
  moduleId   : module.id,
  selector   : 'transaction-detail',
  templateUrl: 'transaction-detail.component.html'
} )
export class TransactionDetailComponent implements OnInit, OnChanges {
  tx: Transaction;

  constructor( private route: ActivatedRoute, private dao: TransactionsDAO ) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap( ( params: Params ) => this.dao.findById( params[ 'id' ] ) )
      .subscribe( ( tx: Transaction ) => this.tx = tx );
  }

  ngOnChanges() {
    console.log( 'TransactionDetailComponent.onChanges(): something has changed.' )
  }

}

