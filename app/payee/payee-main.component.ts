import { Component } from '@angular/core';
import { Payee } from './Payee';
import { PAYEES } from './mock-payees';

@Component( {
  selector: 'payee-main',
  template: `
<div class="row">
  <h3 class="text-center">Payees</h3>
</div>
<div class="row">
<payee-list [payees]="payees" (pickPayee)="setPayee($event)"></payee-list>
<payee-detail [payee]="selectedPayee"></payee-detail>
</div>`

} )
export class PayeeMainComponent {
  payees = PAYEES;
  selectedPayee: Payee;

  setPayee( payee: Payee ) {
    this.selectedPayee = payee;
  }
}

