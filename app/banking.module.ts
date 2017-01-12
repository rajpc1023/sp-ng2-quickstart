import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BankingComponent, } from './banking.component';
import { routing } from './banking.routing';
import { TxModule } from './tx/tx.module';
import { PayeeModule } from './payee/payee.module';

@NgModule( {
  imports     : [ BrowserModule, TxModule, PayeeModule, routing ],
  declarations: [ BankingComponent ],
  bootstrap   : [ BankingComponent ]
} )
export class BankingModule {

}

