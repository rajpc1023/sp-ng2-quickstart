/*
 * Objectives:
 * + Update the PayeesComponent to use ngStyle where appropriate
 * + Update the PayeesComponent to use ngClass where appropriate
 *
 * First, it seemed like preferential treatment to only change the background
 * for New York. Let's re-arrange that. Change the background color for the
 * city/state/zip line based on the state of the Payee. Use ngStyle to do this.
 * Unique states are MD, CA, NY, WI, NJ.
 *
 * You can write a function to do this here in the component and use it in
 * payees.component.html with ngStyle
 *
 * Second, we want to change the panel enhancement class (currently panel-success)
 * depending on the categoryId of the Payee. But bootstrap only has five
 * different enhancement classes! So we will have to add our own:
 *
 * 1) Add 'payees.css' to the styleUrls config in the @Component decoration
 * 2) Depending on the categoryId (unique values are 5, 19, 8, 15, 3, 10, 13),
 *    apply a unique class to enhance the panel (classes are panel-primary,
 *    panel-success, panel-info, panel-warning, panel-danger, panel-royal,
 *    and panel-golden)
 *
 * Again, you can write a function to do this here in the component and use it
 * in payees.component.html, this time with ngClass
 *
 * For an example, check out app/tx/transaction-detail.ts and
 * app/tx/transaction-detail.html.
 *
 * When you are finished, navigate to http://localhost:3000/payees in your browser
 * to see if your code works!
 *
 */
import { Component, OnInit } from '@angular/core';

import { Payee } from './Payee';
import { PAYEES } from './mock-payees';

@Component( {
  moduleId   : module.id,
  selector   : 'payees',
  templateUrl: 'payees.component.html',
  styles     : [
    `.salary { background-color: darkgreen; color: white }`
  ],
  styleUrls  : [ 'payees.css' ]
} )
export class PayeesComponent implements OnInit {
  payees: Payee[];
  currentPayee: Payee;

  ngOnInit(): void {
    this.payees = PAYEES;
    this.currentPayee = this.payees[ 0 ];
  }

  getStateBackground( state ) {
    let backgroundColors = {
      MD: 'lightblue',
      CA: 'orange',
      NY: 'dodgerblue',
      NJ: 'green',
      WI: 'red'
    };

    return { backgroundColor: backgroundColors[ state ] };
  }

  getCategoryClass( categoryId ) {
    let categoryClass = 'panel-primary';
    switch ( categoryId ) {
      case 5:
        categoryClass = 'panel-primary';
        break;
      case 19:
        categoryClass = 'panel-info';
        break;
      case 8:
        categoryClass = 'panel-warning';
        break;
      case 15:
        categoryClass = 'panel-danger';
        break;
      case 3:
        categoryClass = 'panel-success';
        break;
      case 10:
        categoryClass = 'panel-royal';
        break;
      case 13:
        categoryClass = 'panel-golden';
        break;
    }

    return categoryClass
  }

  getPayee( payee, direction ): void {
    let next         = (direction === 'forward' ? 1 : -1),
        currentIndex = this.payees.indexOf( payee ),
        nextIndex    = currentIndex + next,
        len          = this.payees.length;

    if ( nextIndex > len - 1 ) {
      nextIndex = len - 1;
    } else if ( nextIndex < 0 ) {
      nextIndex = 0;
    }

    this.currentPayee = this.payees[ nextIndex ];
  }
}
