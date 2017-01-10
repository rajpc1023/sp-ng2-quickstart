import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TxMainComponent } from './tx-main.component'
import { TxDetailComponent } from './tx-detail.component';

@NgModule( {
  imports     : [ CommonModule ],
  declarations: [ TxMainComponent, TxDetailComponent ],
  exports     : [ TxMainComponent ]
} )
export class TxModule {
}
