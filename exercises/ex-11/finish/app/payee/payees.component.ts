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
 * When you are finished, navigate to http://localhost:3000/payees in your browser
 * to see if your code works!
 *
 */

import { Component, OnInit } from '@angular/core';

import { Payee } from './Payee';
import { CategoryLookupService } from './category-lookup.provider';
import { PayeesDAO } from './payees-dao.provider';

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
