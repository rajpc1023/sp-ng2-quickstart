import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayeeMainComponent } from './payee-main.component';
import { PayeeDetailComponent } from './payee-detail.component';
import { PayeeListComponent } from './payee-list.component';

@NgModule( {
  imports     : [ CommonModule ],
  declarations: [ PayeeMainComponent, PayeeDetailComponent, PayeeListComponent  ],
  exports     : [ PayeeMainComponent  ]
} )
export class PayeeModule {
}

