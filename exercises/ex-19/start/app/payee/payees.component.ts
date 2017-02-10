/*
 * Objectives:
 * + Update the PayeesDAO to use Observables instead of Promises
 * + Update the data-loading logic in PayeesComponent to consume Observables
 *   instead of Promises
 *
 * We will switch to using Observables rather than Promises. Start in
 * payees-dao.provider.ts.
 *
 * Welcome back.
 * + Import and agree to implement OnDestroy
 * + Update ngOnInit to retrieve the list of Payees from an Observable instead
 *   of a Promise
 * + Capture the subscription from the Observable into a property,
 *   lastSubscription
 * + Implement ngOnDestroy and use lastSubscription to cancel a pending request.
 *
 * Go to http://localhost:3000/payees. As usual, the appearance will not have
 * changed, but you will have upgraded to using Observables from Promises.
 *
 */
import { Component, OnInit } from '@angular/core';

import { Payee } from './Payee';
import { CategoryLookupService } from './category-lookup.provider';
import { PayeesDAO } from './payees-dao.provider';
import { PayeeFilter } from './PayeeFilter';

@Component( {
  moduleId: module.id,
  selector: 'payees',
  template: `
<payees-list *ngIf="!currentPayee"
             [payees]="payees" 
             (sort)="handleSort($event)"
             (filter)="handleFilter($event)"
             (payeeSelect)="handlePayeeSelect($event)">
</payees-list>
<section *ngIf="currentPayee">
<payee-detail (next)="handleNext($event)"
              (previous)="handlePrevious($event)"
              [currentPayee]="currentPayee">
</payee-detail>
<div class="row">
  <div class="col-md-12">
    <button class="btn btn-default" (click)="currentPayee=null">Back to List</button>
  </div>
</div>
</section>`
} )
export class PayeesComponent implements OnInit {
  payees: Payee[];
  originalPayees: Payee[];
  currentPayee: Payee;

  constructor( private lookupService: CategoryLookupService,
               private dao: PayeesDAO ) {
  }

  handleFilter( payeeFilter: PayeeFilter ) {
    let filterKeys = Object.keys( payeeFilter );
    this.payees = this.originalPayees.filter( payee => {
      let keepPayee = true;

      filterKeys.every( key => {
        if ( payeeFilter[ key ] !== ''
          && payee[ key ].indexOf( payeeFilter[ key ] ) === -1 ) {
          keepPayee = false;
          return false;
        }
        return true;
      } );

      return keepPayee;
    } )
  }

  handleSort( field ) {
    this.payees.sort( function ( a, b ) {
      if ( a[ field ] > b[ field ] ) {
        return 1;
      } else if ( a[ field ] < b[ field ] ) {
        return -1;
      }
      return 0;
    } )
  }

  handlePayeeSelect( payee ) {
    console.log( 'You clicked on ', payee.payeeName );
    this.currentPayee = payee;
    if ( !this.currentPayee.categoryName )
      this.currentPayee.categoryName = this.lookupService.getCategoryName( this.currentPayee.categoryId )
  }

  handleNext( payee ) {
    let idx     = this.payees.indexOf( payee ),
        nextIdx = Math.min( idx + 1, this.payees.length - 1 );
    this.currentPayee = this.payees[ nextIdx ];

    if ( !this.currentPayee.categoryName )
      this.currentPayee.categoryName = this.lookupService.getCategoryName( this.currentPayee.categoryId )
  }

  handlePrevious( payee ) {
    this.currentPayee = this.payees[ Math.max( this.payees.indexOf( payee ) - 1, 0 ) ];
    if ( !this.currentPayee.categoryName )
      this.currentPayee.categoryName = this.lookupService.getCategoryName( this.currentPayee.categoryId )
  }

  ngOnInit(): void {
    this.dao.list()
      .then( payees => {
        this.payees = payees;
        this.originalPayees = payees;
      } );
  }

}
