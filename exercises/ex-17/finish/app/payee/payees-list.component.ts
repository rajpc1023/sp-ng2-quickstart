/*
 * Delete payeeNameFilter below.
 * Add a property, payeeFilter, make its type PayeeFilter, assign it a
 * new PayeeFilter instance.
 *
 * Change the "filter" custom event to emit a PayeeFilter
 *
 * Change callFilter() to accept a payeeFilter object and to emit that
 * same object.
 *
 * Then go to payees-list.component.html
 *
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Payee } from './Payee';
import { PayeeFilter } from './PayeeFilter';

@Component( {
  moduleId   : module.id,
  selector   : 'payees-list',
  templateUrl: 'payees-list.component.html'
} )
export class PayeesListComponent {

  payeeFilter: PayeeFilter = new PayeeFilter();

  @Input()
  payees: Payee[];

  @Output()
  payeeSelect = new EventEmitter<Payee>();

  @Output()
  sort = new EventEmitter<string>();

  @Output()
  filter = new EventEmitter<PayeeFilter>();

  callFilter( payeeFilter ) {
    this.filter.emit( payeeFilter );
  }

  callSort( field ) {
    this.sort.emit( field );
  }

  callPayeeSelect( payee ) {
    this.payeeSelect.emit( payee );
  }

}
