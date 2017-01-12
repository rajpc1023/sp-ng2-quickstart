import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayeeMainComponent } from './payee-main.component';
import { PayeeDetailComponent } from './payee-detail.component';
import { PayeeListComponent } from './payee-list.component';
import { HttpModule } from '@angular/http';
import { PayeeDAO } from './payee-dao.service';

@NgModule( {
  imports     : [ CommonModule, HttpModule ],
  declarations: [ PayeeMainComponent, PayeeDetailComponent, PayeeListComponent ],
  exports     : [ PayeeMainComponent ],
  providers   : [ PayeeDAO ]
} )
export class PayeeModule {
}

