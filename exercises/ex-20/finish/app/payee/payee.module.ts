/*
 * Import PayeesRoutingModule and add it to the imports array in the
 * @NgModule decorator.
 *
 * Then return to payees-routing.module.ts.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PayeesComponent } from './payees.component';
import { PayeeDetailComponent } from './payee-detail.component';
import { PayeesListComponent } from './payees-list.component';
import { PayeesRoutingModule } from './payees-routing.module';

@NgModule( {
  imports     : [ CommonModule, FormsModule, HttpModule, PayeesRoutingModule ],
  declarations: [ PayeesComponent, PayeeDetailComponent, PayeesListComponent ]
} )
export class PayeeModule {
}
