import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BankingComponent, } from './banking.component';
import { BankingRoutingModule } from './banking-routing.module';
import { TxModule } from './tx/transactions.module';
import { CategoryModule } from './category/category.module';
import { DemosModule } from './demos/demos.module';
import { BankingCommonModule } from './common/common.module';

@NgModule( {
  imports     : [ BrowserModule, TxModule, CategoryModule,
                  DemosModule, BankingCommonModule, BankingRoutingModule ],
  declarations: [ BankingComponent ],
  bootstrap   : [ BankingComponent ]
} )
export class BankingModule {
}

