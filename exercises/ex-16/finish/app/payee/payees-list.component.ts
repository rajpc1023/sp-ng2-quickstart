/*
 * Part 1: Sorting
 *
 * Create a custom event, sort, which emits a string (the name of the field
 * to sort on)
 * Emit the event in an event handler called callSort().
 *
 * Then go to payees-list.component.html and attach the event handler.
 *
 * Part 2: Filtering
 *
 * For our first pass at filtering, we will take a single scalar value and use
 * it to filter against the payeeName property of a Payee.
 *
 * Filtering will not be done locally, but by a container component. Therefore,
 * + add a property to the component, payeeNameFilter, which is a string
 * + add a custom event "filter" which will emit a string
 * + add a method, callFilter() which takes a string as an argument and invokes
 *   the "filter" custom event, emitting the string argument
 *
 * Then go to payees-list.component.html to add the event handler to the HTML.
 *
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Payee } from './Payee';

@Component( {
  moduleId   : module.id,
  selector   : 'payees-list',
  templateUrl: 'payees-list.component.html'
} )
export class PayeesListComponent {

  payeeNameFilter: string;

  @Input()
  payees: Payee[];

  @Output()
  payeeSelect = new EventEmitter<Payee>();

  @Output()
  sort = new EventEmitter<string>();

  @Output()
  filter = new EventEmitter<string>();

  callFilter( payeeName ) {
    this.filter.emit( payeeName );
  }

  callSort( field ) {
    this.sort.emit( field );
  }

  callPayeeSelect( payee ) {
    this.payeeSelect.emit( payee );
  }

}
