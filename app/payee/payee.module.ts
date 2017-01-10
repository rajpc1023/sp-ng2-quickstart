import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayeeMainComponent } from './payee-main.component';

@NgModule( {
  imports     : [ CommonModule ],
  declarations: [ PayeeMainComponent  ],
  exports     : [ PayeeMainComponent  ]
} )
export class PayeeModule {
}

