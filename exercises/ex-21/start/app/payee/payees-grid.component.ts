import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Payee } from './Payee';
import { PayeeFilter } from './PayeeFilter';

@Component( {
  moduleId   : module.id,
  selector   : 'payees-grid',
  templateUrl: 'payees-grid.component.html'
} )
export class PayeesGridComponent {
  payeeFilter:PayeeFilter = new PayeeFilter();

  @Input()
  payees: Payee[];

  @Output()
  payeeSelect = new EventEmitter<Payee>();

  @Output()
  sort = new EventEmitter<string>();

  @Output()
  filter = new EventEmitter<PayeeFilter>();

  callFilter(payeeFilter) {
    this.filter.emit( payeeFilter );
  }

  callSort( field ) {
    this.sort.emit( field );
  }

  callPayeeSelect( payee ) {
    this.payeeSelect.emit( payee );
  }

}
