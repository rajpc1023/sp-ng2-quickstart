/*
 * Objectives:
 * + Create a PayeesListComponent, which is responsible for displaying a list of Payees
 * + Update the PayeesComponent to use PayeesListComponent to display all the Payees
 *
 * We are swapping out the PayeeDetailComponent for a PayeesListComponent
 * (for now). Go to payees-list.component.ts and follow the directions there.
 *
 * Welcome back. You need to make two changes here.
 * 1) Change the template to point to payees-list
 * 2) In the payees-list component, bind the list of payees to the payees
 *    property.
 *
 * When you are finished, navigate to http://localhost:3000/payees in your browser
 * to see if your code works!
 *
 */
import { Component, OnInit } from '@angular/core';

import { Payee } from './Payee';
import { CategoryLookupService } from './category-lookup.provider';
import { PayeesDAO } from './payees-dao.provider';

@Component( {
  moduleId: module.id,
  selector: 'payees',
  template: `<payees-list [payees]="payees"></payees-list>`
} )
export class PayeesComponent implements OnInit {
  payees: Payee[];
  currentPayee: Payee;

  constructor( private lookupService: CategoryLookupService,
               private dao: PayeesDAO ) {
  }

  handleNext( payee ) {
    let idx     = this.payees.indexOf( payee ),
        nextIdx = Math.min( idx + 1, this.payees.length -1 );
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
        this.currentPayee = this.payees[ 0 ];
        this.currentPayee.categoryName = this.lookupService.getCategoryName( this.currentPayee.categoryId )
      } );
  }

}
