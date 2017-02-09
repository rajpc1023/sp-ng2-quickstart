/*
 * Objectives:
 * + Update PayeeDetailComponent to allow it to request previous and next Payees
 * + Update the PayeesComponent to pass custom event handlers for the next and
 *   previous events on PayeeDetailComponent
 *
 * We left the last exercise with unfinished business. We will now re-activate
 * the Next and Previous buttons in our PayeeDetailComponent.
 *
 * But, following the design philosophy of container and presentational components,
 * the array of Payees will stay here, in PayeesComponent. So PayeeDetailComponent
 * will fire custom events when the Next and Previous buttons are clicked.
 * PayeesComponent will pass handlers for those events into PayeeDetailComponent.
 *
 * Go to payee-detail.component.ts and follow the directions there.
 *
 * Welcome back. Now that PayeeDetailComponent is emitting custom events,
 * PayeesComponent should do two things:
 *
 * Write two custom event handlers:
 *
 * name: handleNext(payee)
 * arguments: a Payee
 * returns: nothing
 * Sets currentPayee to the next Payee in payees
 *
 * name: handlePrevious(payee)
 * arguments: a Payee
 * returns: nothing
 * Sets currentPayee to the previous Payee in payees
 *
 * Pass these handlers in to payee-detail by binding to the appropriate custom
 * events. Remember that, in the template, the argument to the handler function
 * is $event, not payee.
 *
 * When you are finished, navigate to http://localhost:3000/payees in your browser
 * to see if your code works!
 *
 * While the appearance of the PayeeDetailComponent will not have changed, the
 * Next and Previous buttons should now work!
 *
 */
import { Component, OnInit } from '@angular/core';

import { Payee } from './Payee';
import { CategoryLookupService } from './category-lookup.provider';
import { PayeesDAO } from './payees-dao.provider';

@Component( {
  moduleId   : module.id,
  selector   : 'payees',
  template: '<payee-detail [currentPayee]="currentPayee"></payee-detail>',
} )
export class PayeesComponent implements OnInit {
  payees: Payee[];
  currentPayee: Payee;

  constructor( private lookupService: CategoryLookupService,
               private dao: PayeesDAO ) {
  }

  ngOnInit(): void {
    this.payees = this.dao.list()
      .then( payees => {
        this.payees = payees;
        this.currentPayee = this.payees[ 0 ];
        this.currentPayee.categoryName = this.lookupService.getCategoryName( this.currentPayee.categoryId )
      } );
  }

}
