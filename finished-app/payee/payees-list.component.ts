import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Payee } from './Payee';

@Component( {
  selector   : 'payees-list',
  templateUrl: 'app/payee/payees-list.component.html',
  styles     : [
    `
li { cursor: pointer }
`
  ]
} )
export class PayeesListComponent {
  @Input()
  payees: Payee[];

  @Output()
  pickPayee = new EventEmitter<Payee>();

  selectPayee( payee: Payee ) {
    this.pickPayee.emit( payee );
  }
}
