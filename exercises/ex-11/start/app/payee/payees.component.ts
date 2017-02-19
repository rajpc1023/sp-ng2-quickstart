/*
 * Objectives:
 * + Create a PayeeDAO, which wraps around data access
 * + Update the PayeeComponent to use PayeeDAO to provide the data therein
 * + Use Promises when consuming data from the DAO
 *
 * Note that at the start of this exercise, the Payee view will show nothing
 * as payees and currentPayee are undefined.
 *
 * Start by going to payees-dao.provider.ts and creating a DAO there.
 *
 * When you return, add the PayeesDAO to the constructor.
 * In ngOnInit(), use the DAO to fetch the list of Payees.
 * Do not forget that fetching the list will return a Promise which resolves to
 * the list of Payees, not a list of Payees in and of itself.
 *
 */

import { Component, OnInit } from '@angular/core';

import { Payee } from './Payee';
import { CategoryLookupService } from './category-lookup.provider';

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

  constructor( private lookupService: CategoryLookupService ) {
  }

  ngOnInit(): void {
    this.payees = [];
    this.currentPayee = null;
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

    if ( !this.currentPayee.categoryName ) {
      this.currentPayee.categoryName = this.lookupService.getCategoryName( this.currentPayee.categoryId )
    }
  }
}
