/*
 * Add two custom Output properties to PayeeDetailComponent: "next" and "previous"
 * Make sure they are EventEmitters, which emit Payee objects
 *
 * We will add two methods to this component:
 *
 * name: callNext(payee)
 * arguments: current Payee
 * returns: nothing
 * Invokes the "next" EventEmitter, passing the payee argument
 *
 * name: callPrevious(payee)
 * arguments: current Payee
 * returns: nothing
 * Invokes the "previous" EventEmitter, passing the payee argument
 *
 * Delete getPayee() as we no longer need it.
 *
 * Then go to payee-detail.component.html
 *
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Payee } from './Payee';

@Component( {
  moduleId   : module.id,
  selector   : 'payee-detail',
  templateUrl: 'payee-detail.component.html',
  styles     : [
    `.salary { background-color: darkgreen; color: white }`
  ],
  styleUrls  : [ 'payees.css' ]

} )
export class PayeeDetailComponent {

  @Input()
  currentPayee: Payee;

  @Output()
  next = new EventEmitter<Payee>();

  @Output()
  previous = new EventEmitter<Payee>();

  callNext( payee ) {
    this.next.emit( payee );
  }

  callPrevious( payee ) {
    this.previous.emit( payee );
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
