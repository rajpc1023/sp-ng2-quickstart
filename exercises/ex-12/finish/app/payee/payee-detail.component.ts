/*
 * Create a component with the following details:
 *
 * + Class name is PayeeDetailComponent
 * + moduleId set to module.id
 * + selector of 'payee-detail'
 * + templateUrl of payee-detail.component.html
 * + Expects an Input of currentPayee
 * + Add a no-op event handler, getPayee() (we will implement this in the next
 *   exercise)
 * + Rename payees.component.html to payee-detail.component.html
 *
 * Then go to payee.module.ts.
 *
 */
import { Component, Input } from '@angular/core';
import { Payee } from './Payee';

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

  @Input()
  currentPayee: Payee;

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

  getPayee() {
    console.log('This is unimplemented at the moment.')
  }
}
