import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Payee } from './Payee';

@Component( {
  selector   : 'payee-list',
  templateUrl: 'app/payee/payee-list.component.html',
  styles     : [
    `
li { cursor: pointer }
`
  ]
} )
export class PayeeListComponent {
  @Input()
  payees: Payee[];

  @Output()
  pickPayee = new EventEmitter<Payee>();

  selectPayee( payee: Payee ) {
    this.pickPayee.emit( payee );
  }
}
