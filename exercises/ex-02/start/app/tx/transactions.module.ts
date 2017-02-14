import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionDetailComponent } from './transaction-detail.component';
import { TransactionsListComponent } from './transactions-list.component';
import { TransactionsSearchComponent } from './transactions-search.component';
import { TransactionFormComponent } from './transaction-form.component';
import { TransactionsGridComponent } from './transactions-grid.component';

import { TransactionsDAO } from './transactions-dao.service';

@NgModule( {
  imports     : [ CommonModule, FormsModule, HttpModule,
                  TransactionsRoutingModule ],
  declarations: [ TransactionsSearchComponent, TransactionsGridComponent,
                  TransactionDetailComponent, TransactionsListComponent,
                  TransactionFormComponent ],
  providers   : [ TransactionsDAO ],
  exports     : [ TransactionsListComponent, TransactionsSearchComponent,
                  TransactionDetailComponent ]
} )
export class TxModule {
  constructor() {
    console.log( 'TxModule loaded!' );
  }
}
