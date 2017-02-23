import { Component, OnInit } from '@angular/core';
import { Transaction } from '../tx/Transaction';
import { DemoTransactionsDAO } from './demo-tx-dao.provider';

@Component( {
  moduleId   : module.id,
  templateUrl: 'service-dependency.component.html'
} )
export class ServiceDependencyComponent implements OnInit {
  tx: Transaction;

  constructor( private dao: DemoTransactionsDAO ) {
  }

  ngOnInit() {
    this.dao.findById( 500 )
      .then( ( tx: Transaction ) => this.tx = tx )
  }

  callRefresh(refreshTx) {
    this.dao.findById( refreshTx.id )
      .then( ( tx: Transaction ) => this.tx = tx )
  }
}

