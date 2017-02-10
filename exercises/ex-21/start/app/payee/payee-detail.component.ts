/*
 * At the moment, ngOnInit is a no-op. Add code to do the following:
 * + Look at the params for this route
 * + Grab the ID
 * + Make a request of the DAO for the Payee with that ID
 * + Make the Payee available on the component'
 *
 * Now test your code to see if you can navigate from list to detail view.
 * In your browser, navigate to http://localhost:3000/payees/list. Click on
 * one of the table rows. It should take you to the appropriate detail view
 * for that Payee.
 *
 * Then navigate to http://localhost:3000/payees/detail/47. That should also
 * show the details for a particular Payee.
 *
 * Then go to payee-detail.component.html.
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Payee } from './Payee';
import { PayeesDAO } from './payees-dao.provider';

@Component( {
  moduleId   : module.id,
  selector   : 'payee-detail',
  templateUrl: 'payee-detail.component.html',
  styles     : [
    `.salary { color: darkgreen }`
  ],
  styleUrls  : [ 'payees.css' ]

} )
export class PayeeDetailComponent {

  payee: Payee;

  constructor( private route: ActivatedRoute,
               private dao: PayeesDAO ) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap( ( params: Params ) => this.dao.findById( params[ 'id' ] ) )
      .subscribe( ( payee: Payee ) => this.payee = payee );
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

}
