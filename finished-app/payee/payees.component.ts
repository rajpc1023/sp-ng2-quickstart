import { Component, OnInit } from '@angular/core';
import { Payee } from './Payee';
import { PAYEES } from './mock-payees';
import { PayeesDAO } from './payees-dao.service';

@Component( {
  selector: 'payees',
  templateUrl: 'app/payee/payees.component.html'
} )
export class PayeesComponent implements OnInit {
  selectedPayee: Payee;
  payees: Payee[];

  constructor( private dao: PayeesDAO ) {
  }

  ngOnInit() {
    this.dao.list()
      .then( (payees:Payee[]) => this.payees = payees, (err:any) => console.error('Bad news: ', err) );
  }

  setPayee( payee: Payee ) {
    this.selectedPayee = payee;
  }
}

