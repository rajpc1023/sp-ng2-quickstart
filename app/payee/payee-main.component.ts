import { Component } from '@angular/core';
import { Payee } from './Payee';

@Component({
  selector: 'payee-main',
  template: `
<div class="row">
  <h3 class="text-center">Payees</h3>
</div>
<payee-detail [payee]="payee"></payee-detail>`
})
export class PayeeMainComponent {
  payee = new Payee( {
    "payeeId"   : 47,
    "payeeName" : "Goodman, Lieber, Kurtzberg, Holliway",
    "categoryId": 13,
    "address"   : "16 W 12 St.",
    "city"      : "New York",
    "state"     : "NY",
    "zip"       : "10015",
    "image"     : "/images/animals/9.jpg",
    "motto"     : null,
    "txs"       : null
  } );
}

