/*
 * Objectives:
 * + Add an array of Payees to the component
 * + Add Next and Previous buttons to PayeeComponent
 * + When clicked, the buttons browse through the array of Payees in the component,
 *   one at a time
 *
 * Import an array of Payees from ./mock-payees.ts. This file exports an array
 * of Payees called PAYEES. You can make it available to the component in the
 * ngOnInit method.
 *
 * Add a property, currentPayee, which should be set to payees[0] at startup
 *
 * Add event handler(s) to navigate forwards and backwards through payees.
 *
 * Then go to payees.component.html and follow the directions there.
 *
 * When you return, navigate to http://localhost:3000/payees in your browser
 * and test out the code.
 *
 */
import { Component, OnInit } from '@angular/core';

import { Payee } from './Payee';

@Component( {
  moduleId   : module.id,
  selector   : 'payees',
  templateUrl: 'payees.component.html'
} )
export class PayeesComponent implements OnInit {
  payee: Payee;

  ngOnInit(): void {
    this.payee = new Payee( {
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
}
