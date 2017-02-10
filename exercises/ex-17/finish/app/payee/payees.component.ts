/*
 * Objectives:
 * + Update the PayeesListComponent to permit filtering by several columns at once
 * + Update the filtering logic in PayeesComponent accordingly
 *
 * We are switching from a sinlge point of filtering, to filtering on multiple
 * fields. To do so, we will need the following:
 *
 * + A PayeeFilter object, which contains the types for the filter
 * + To change the ngModel from a string to a PayeeFilter
 * + To write new filtering logic
 *
 * First, go to PayeeFilter.ts and follow the directions there.
 *
 * Welcome back. The handleFilter() function is now receiving a PayeeFilter
 * instance, so it should be updated accordingly.
 *
 * The logic for filtering is as follows:
 * + Iterate over the originalPayees, inside the iteration
 * ++ Iterate over the fields in the PayeeFilter
 * ++ If not empty, see if the value in the field is contained within the
 *    corresponding value for the Payee we are looking at
 * ++ If it is NOT, then reject this Payee from the list
 * ++ If this Payee makes it through all the tests, it is filtered IN
 * + Conclude Payee iteration
 *
 * If you want to use tools from lodash (a useful utility library) it can be
 * imported via
 * import * as '_' from 'lodash';
 *
 * Go to http://localhost:3000/payees and try out your code to see if your
 * improved filtering works. If you have problems you cannot solve, consult
 * with your instructor.
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

      // Should short circuit on not finding a match
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
