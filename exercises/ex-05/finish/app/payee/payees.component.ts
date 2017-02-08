/*
 * Objectives:
 * + Add an instance of Payee to our PayeesComponent
 * + Display the details of the Payee in PayeesComponent
 *
 * Import the Payee class
 * In a browser window, go to http://localhost:8001/payee/47
 * Copy that Payee data here and create an instance of Payee using said data
 * Make the Payee you created available as a property on the component (call
 * it "payee")
 *
 * Then go to payees.component.html (the HTML for this component) and change the
 * template to print out the relevant information for the Payee (name, id,
 * address, city, state, zip). Try using Bootstrap classes if you want to
 * spruce up your presentation.
 *
 * Test your code by going to http://localhost:3000/payees
 *
 */
import { Component } from '@angular/core';

import { Payee } from './Payee';

@Component( {
  moduleId   : module.id,
  selector   : 'payees',
  templateUrl: 'payees.component.html'
} )
export class PayeesComponent {
  payee: Payee = new Payee( {
    "id"        : 47,
    "payeeName" : "Goodman, Lieber, Kurtzberg, Holliway",
    "categoryId": 13,
    "address"   : "16 W 12 St.",
    "city"      : "New York",
    "state"     : "NY",
    "zip"       : "10015",
    "image"     : "/images/animals/9.jpg",
    "motto"     : null
  } );
}
