/*
 * Objectives:
 * + Update the PayeesComponent to manage communication between PayeesListComponent
 *   and PayeeDetailComponent
 * + Have PayeesComponent determine which presentational component should be
 *   displayed at any given state
 *
 * We now have to presentational components (PayeesListComponent and
 * PayeeDetailComponent) managed by one container component (PayeesComponent)
 *
 * The high-level set of actions here:
 * + Update payees-list to emit a custom event when the user clicks on a row
 * + Use that event to switch the view from payees-list to payee-detail with
 *   the clicked-on payee
 * + Add a way to go back from the payee-detail view to the payees-list view
 *
 * Since payees-list and payee-detail are independent of their container, we will
 * start with those. Go to payees-list.component.ts and follow the directions
 * there.
 *
 * Welcome back. Let's finish hooking up the event handling. Add a new event
 * handling function, handleSelect, which is passed into PayeesListComponent,
 * bound to the "select" event.
 *
 * If you want to verify that everything is working so far, you can have
 * handleSelect log to the console that it was called. It might be a good idea
 * to make sure things are working so far before proceeding to the next section.
 *
 * Uncomment payee-detail in the template. Now we need code to change which view
 * should be visible. You can use either *ngIf to hide and show components, or you
 * could use CSS (display:none and display:block, add them as classes, if you
 * want to). Either way, start with payees-list, when a payee is clicked on,
 * display that payee in payee-detail. Add code (here, not in payee-detail) to
 * allow the user to return from payee-detail to payee-list.
 *
 * Check in with your instructor if any of this is not clear.
 *
 * When you are finished, navigate to http://localhost:3000/payees in your browser
 * to see if your code works!
 * You should see the Payees list first, you can click on a Payee to see it in
 * detail, and there should be a navigational element which returns you to the
 * Payees list.
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
<payees-list [payees]="payees"></payees-list>
<!--
<payee-detail (next)="handleNext($event)"
              (previous)="handlePrevious($event)"
              [currentPayee]="currentPayee"
></payee-detail>
-->
`
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
