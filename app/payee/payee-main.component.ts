import { Component, OnInit } from '@angular/core';
import { Payee } from './Payee';
import { PAYEES } from './mock-payees';
import { Http } from '@angular/http';
import { PayeeDAO } from './payee-dao.service';

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
export class PayeeMainComponent implements OnInit {
  selectedPayee: Payee;
  payees: Payee[];

  constructor( private dao: PayeeDAO ) {
  }

  ngOnInit() {
    this.dao.list()
      .then( payees => this.payees = payees, err => console.error('Bad news: ', err) );
  }

  setPayee( payee: Payee ) {
    this.selectedPayee = payee;
  }
}

