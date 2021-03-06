/*
 * Import PayeeDetailComponent, and register it under declarations
 *
 * Then return to payees.component.ts
 *
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayeesComponent } from './payees.component'
import { CategoryLookupService } from './category-lookup.provider';
import { PayeesDAO } from './payees-dao.provider';

@NgModule( {
  imports     : [ CommonModule ],
  declarations: [ PayeesComponent ],
  providers   : [ CategoryLookupService, PayeesDAO ]
} )
export class PayeeModule {
}
