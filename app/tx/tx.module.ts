import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TxMainComponent } from './tx-main.component'

@NgModule( {
  imports     : [ CommonModule ],
  declarations: [ TxMainComponent ],
  exports     : [ TxMainComponent ]
} )
export class TxModule {
}
