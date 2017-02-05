import { Component, Input } from '@angular/core';
import { Payee } from './Payee';

@Component( {
  selector   : 'payee-detail',
  templateUrl: 'app/payee/payee-detail.component.html'
} )
export class PayeeDetailComponent {
  @Input()
  payee: Payee;
}
