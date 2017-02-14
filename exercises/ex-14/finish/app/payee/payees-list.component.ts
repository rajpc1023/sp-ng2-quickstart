/*
 * Create a PayeeListComponent
 * Set the moduleId to module.id
 * The selector should be payees-list
 * And the templateUrl should be payees-list.component.html
 *
 * It should take an array of Payees as an input and make it available as a
 * property "payees"
 *
 * Then go to payees-list.component.html
 *
 */

import { Component, Input } from '@angular/core';

@Component( {
  moduleId   : module.id,
  selector   : 'payees-list',
  templateUrl: 'payees-list.component.html'
} )
export class PayeesListComponent {

  @Input()
  payees: Payee[];
}
