/*
 * Import PayeesListComponent and add it to the declarations array.
 *
 * When you are done, return to payees.component.ts.
 *
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayeesComponent } from './payees.component';
import { PayeeDetailComponent } from './payee-detail.component';

import { CategoryLookupService } from './category-lookup.provider';
import { PayeesDAO } from './payees-dao.provider';

@NgModule( {
  imports     : [ CommonModule ],
  declarations: [ PayeesComponent, PayeeDetailComponent ],
  providers   : [ CategoryLookupService, PayeesDAO ]
} )
export class PayeeModule {
}
