/*
 * Objectives:
 * + Change the way elements are displayed using style bindings
 * + Add CSS classes to the styles property of the @Component decorator
 * + Use these classes to update the display of the Payee
 *
 * First, go to payees.component.html and follow the directions there. Then
 * return here
 *
 * Now that you have added one style binding, we will add a class binding.
 * Add a styles block to the @Component decoration
 * Declare a class called salary, have it turn the color of the text dark green,
 *
 * Return to payees.component.html and apply the class to the payee name
 * (not in the heading) when the category ID is 19.
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
  ]
} )
export class PayeesComponent implements OnInit {
  payees: Payee[];
  currentPayee: Payee;

  ngOnInit(): void {
    this.payees = PAYEES;
    this.currentPayee = this.payees[ 0 ];
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
