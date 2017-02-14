import { Component } from '@angular/core';
import { TransactionCriteria } from './TransactionCriteria';
import { TransactionsDAO } from './transactions-dao.service';
import { Transaction } from './Transaction';
import { Router } from '@angular/router';

@Component( {
  moduleId: module.id,
  selector: 'transactions-search',
  template: `<h2>Searching for transactions <small>Go to the full <a routerLink="/tx/list">list</a></small></h2>
<transaction-form (onSearch)="searchHandler($event)"></transaction-form>`
} )
export class TransactionsSearchComponent {
  constructor( private dao: TransactionsDAO, private router: Router ) {
  }

  searchHandler( criteria: TransactionCriteria ) {
    this.router.navigate( [ 'tx',
                            'list' ], { queryParams: criteria.getCriteriaFlat() } );
  }

}
