/*
 * Objectives:
 * + Create a CategoryLookupService, which takes an argument of a category ID
 *   and returns the associated category name
 * + Update the PayeesComponent to use CategoryLookupService to enrich the
 *   data therein
 *
 * First, create a service, CategoryLookupService.
 * Open category-lookup.provider.ts and follow the directions there. Then
 * return here.
 *
 * Welcome back. Add CategoryLookupService to the component below (this means
 * you will need to add a constructor as well). Then, when fetching a payee,
 * make sure that the payee is enhanced with a categoryName.
 *
 * Then go to payees.component.html and add the categoryName as a line in the
 * panel.
 *
 * When you are finished, navigate to http://localhost:3000/payees in your browser
 * to see if your code works!
 *
 */
import { Component, OnInit } from '@angular/core';

import { Payee } from './Payee';
import { PAYEES } from './mock-payees';
import { CategoryLookupService } from './category-lookup.provider';

@Component( {
  moduleId   : module.id,
  selector   : 'payees',
  templateUrl: 'payees.component.html',
  styles     : [
    `.salary { color: darkgreen }`
  ],
  styleUrls  : [ 'payees.css' ]
} )
export class PayeesComponent implements OnInit {
  payees: Payee[];
  currentPayee: Payee;

  constructor(private lookupService:CategoryLookupService) {}

  ngOnInit(): void {
    this.payees = PAYEES;
    this.currentPayee = this.payees[ 0 ];
    this.currentPayee.categoryName = this.lookupService.getCategoryName(this.currentPayee.categoryId)
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
    let categoryClass = 'panel-primary'
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

    if (!this.currentPayee.categoryName) {
      this.currentPayee.categoryName = this.lookupService.getCategoryName(this.currentPayee.categoryId)
    }
  }
}
