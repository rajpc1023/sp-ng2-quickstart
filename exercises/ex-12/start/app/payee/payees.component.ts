/*
 * Objectives:
 * + Create a PayeeDetailComponent, which is responsible for displaying a Payee
 * + Update the PayeesComponent to use PayeeDetailComponent to display the Payee
 *
 * We are moving to having this component manage other components. This component
 * will be a container component, and the contained components will be
 * presentational components.
 *
 * We will split the content of this component into container responsibilities
 * and presentational responsibilities.
 *
 * First, go to payee-detail.component.ts and follow the directions there.
 *
 * Welcome back. Some of the content here should move to PayeeDetailComponent,
 * specifically:
 *
 * + The styles and styleUrls blocks
 * + The currentPayee declaration (as an Input)
 * + The getStateBackground function
 * + The getCategoryClass function
 *
 * Remove the templateUrl property on the @Component decoration (you have renamed
 * the file, so it isn't relevant anymore). Replace it with an in-line template
 * property which invokes payee-detail and passes it the currentPayee as a
 * data-bound property.
 *
 * Note that getPayee has been commented out, since it will not be used
 * in this exercise.
 *
 * When you are finished, navigate to http://localhost:3000/payees in your browser
 * to see if your code works!
 *
 * Two important things to remember
 * 1) Not much will have changed visually. You have reorganized your code,
 *    but not changed much in presentation.
 * 2) At the moment, the Next and Previous buttons are not working. We will fix
 *    them in the next exercise.
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
    this.dao.list()
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
