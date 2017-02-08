/*
 * Objectives:
 * + Move Payee initialization to ngOnInit
 * + Only display the details of the Payee if the appropriate property is populated
 *
 * Import the OnInit interface
 * Have PayeesComponent implement the OnInit interface
 * Move the creation of the payee property to the ngOnInit method
 *
 * Then go to payees.component.html and follow the directions there.
 * When you are done, return here.
 *
 * Welcome back. To test your code, go to http://localhost:3000/payees
 * Everything should work and, unless you changed the HTML, everything should
 * look the same. Check console in the developer tools to make sure there are
 * no errors.
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
