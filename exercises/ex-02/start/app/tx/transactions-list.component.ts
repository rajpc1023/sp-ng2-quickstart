import { Component, OnInit, OnDestroy } from '@angular/core';
import { Transaction } from './Transaction';
import { TransactionsDAO } from './transactions-dao.service';
import * as _ from 'lodash';
import * as moment from 'moment';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs';

@Component( {
  selector: 'transactions-list',
  template: `<h2>Transactions List <small>Go to <a routerLink="/tx/search">search</a></small></h2>
<transactions-grid [transactions]="txs" 
                   (onSort)="sortTx($event)" 
                   (onFilter)="filterTx($event)"
                   (onSelectTx)="handleSelect($event)"></transactions-grid>
`
} )
export class TransactionsListComponent implements OnInit, OnDestroy {

  txs: Transaction[];
  originalTxs: Transaction[];
  lastSubscription: Subscription;

  private lastSort: string = '';

  constructor( private dao: TransactionsDAO,
               private route: ActivatedRoute,
               private router: Router ) {
  }

  ngOnInit(): void {
    this.lastSubscription = this.route.queryParams
      .switchMap( ( params: Params ) => this.dao.query( params ) )
      .subscribe( ( txs: Transaction[] ) => {
        this.originalTxs = this.txs = txs;
      } );
  }

  ngOnDestroy(): void {
    this.lastSubscription.unsubscribe();
  }

  handleSelect( tx ) {
    console.log( 'TransactionListComponent.handleSelect(): ', tx );
    this.router.navigate( [ 'tx', 'detail', tx.id ] );
  }

  sortTx( field ) {
    this.txs = _.sortBy( this.txs, [ field ] );
    if ( this.lastSort === field ) {
      this.txs = this.txs.reverse();
      this.lastSort = '';
    } else {
      this.lastSort = field;
    }
  }

  filterTx( txFilter ) {
    let criteria = txFilter.getCriteria();
    this.txs = this.originalTxs.filter( function ( tx ) {
      let included = true;
      Object.keys( criteria ).forEach( function ( key ) {
        let testVal = '';
        switch ( key ) {
          case 'txDate':
            testVal += moment( tx[ key ] ).format( 'dddd, MMMM Do YYYY, hh:mm:ss a' );
            break;
          case 'payeeName':
            testVal += tx.payee.payeeName;
            break;
          case 'categoryName':
            testVal += tx.category.categoryName;
            break;
          default:
            testVal += tx[ key ];
            break;
        }

        if ( testVal.search( criteria[ key ] ) === -1 ) {
          included = false;
        }
      } );

      return included;
    } )
  }

}
