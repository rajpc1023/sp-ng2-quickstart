import { Component, OnInit } from '@angular/core';
import { Payee } from './Payee';
import { PAYEES } from './mock-payees';
import { Http } from '@angular/http';
import { PayeeDAO } from './payee-dao.service';

@Component( {
  selector: 'payee-main',
  templateUrl: 'app/payee/payee-main.component.html'
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

