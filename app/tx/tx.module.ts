import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TxMainComponent } from './tx-main.component'
import { TxDetailComponent } from './tx-detail.component';
import { TxListComponent } from './tx-list.component';
import { TransactionDAO } from './tx-dao.service';

@NgModule( {
  imports     : [ CommonModule, FormsModule ],
  declarations: [ TxMainComponent, TxDetailComponent, TxListComponent ],
  providers   : [ TransactionDAO ],
  exports     : [ TxMainComponent ]
} )
export class TxModule {
}
