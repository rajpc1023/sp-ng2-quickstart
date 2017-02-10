/*
 * Objectives:
 * + Update the PayeesListComponent to permit sorting of the data set by clicking on the column headers
 * + Add filtering to PayeesListComponent based on input from a form field
 *
 * You are going to add sorting and filtering functionality. The actual sorting
 * and filtering will be done here, but will be dependent on custom events
 * emitted from PayeesListComponent. We will do this in two passes. First, we
 * will implement sorting, then we will implement filtering.
 *
 * Go to payees-list.component.ts. Follow the directions there.
 *
 * Welcome back. Implement a handleSort method which takes a string as an
 * argument. The string is the name of the field in payees on which to sort.
 * Re-sort payees on that field name.
 *
 * Go to http://localhost:3000/payees and try out your code to see if sorting
 * works. If you have problems you cannot solve, consult with your instructor.
 *
 * Part 2: Filtering
 *
 * As before, start in payees-list.component.ts.
 *
 * Welcome back. Implement a handleFilter method, which takes a string as an
 * argument. The string is the value of the payeeName to filter for. Iterate
 * over the payees array and return a new version of the array with only the
 * filtered-for Payees in it.
 *
 * Note that we have stored a reference to the original array of Payees in
 * originalPayees as well. Filtering should be done against originalPayees, but
 * should be assigned to payees.
 *
 * Go to http://localhost:3000/payees and try out your code to see if filtering
 * works. If you have problems you cannot solve, consult with your instructor.
 *
 */
import { Component, OnInit } from '@angular/core';

import { Payee } from './Payee';
import { CategoryLookupService } from './category-lookup.provider';
import { PayeesDAO } from './payees-dao.provider';

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

  handleFilter(payeeName) {
    if (!payeeName) {
      this.payees = this.originalPayees;
    } else {
      this.payees = this.originalPayees.filter(payee => payee.payeeName.toUpperCase().indexOf(payeeName.toUpperCase()) > -1)
    }
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
