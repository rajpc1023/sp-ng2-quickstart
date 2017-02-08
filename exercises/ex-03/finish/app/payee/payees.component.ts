/*
 * Write a component, PayeesComponent.
 * Its selector should be "payees"
 * The HTML can render a simple h2, indicating it is the Payees Component
 * (We will add more in subsequent exercises)
 *
 * Then return to payee.module.ts
 */

import { Component } from '@angular/core';

@Component( {
  selector   : 'payees',
  template: '<h2>This is the Payees Component</h2>'
} )
export class PayeesComponent { }
