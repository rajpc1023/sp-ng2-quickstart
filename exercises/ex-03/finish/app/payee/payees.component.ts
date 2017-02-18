/*
 * Write a component, PayeesComponent.
 * Since this is a component, you will need to import the Component decorator
 * from @angular/core (as you did in Exercise 1 for AppComponent)
 * Its selector should be "payees"
 * The HTML can render a simple h2, indicating it is the Payees Component
 * (We will add more in subsequent exercises)
 *
 * Then return to payee.module.ts
 */

import { Component } from '@angular/core';

@Component( {
  selector: 'payees',
  template: '<h2>This is the Payees Component</h2>'
} )
export class PayeesComponent {
}
