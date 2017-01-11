import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TxMainComponent } from './tx-main.component'
import { TxDetailComponent } from './tx-detail.component';
import { TxListComponent } from './tx-list.component';

@NgModule( {
  imports     : [ CommonModule, FormsModule ],
  declarations: [ TxMainComponent, TxDetailComponent, TxListComponent ],
  exports     : [ TxMainComponent ]
} )
export class TxModule {
}
