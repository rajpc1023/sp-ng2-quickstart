import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BankingComponent } from './banking.component';
import {TxModule} from './tx/tx.module';

@NgModule( {
  imports     : [ BrowserModule, TxModule ],
  declarations: [ BankingComponent ],
  bootstrap   : [ BankingComponent ]
} )
export class BankingModule {

}

