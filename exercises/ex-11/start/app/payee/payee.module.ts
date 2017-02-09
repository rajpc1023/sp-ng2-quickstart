/*
 * Import the new DAO here and register it with the providers list in the
 * @NgModule decoration
 *
 * Then return to payees.component.ts
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayeesComponent } from './payees.component'
import { CategoryLookupService } from './category-lookup.provider';

@NgModule( {
  imports     : [ CommonModule ],
  declarations: [ PayeesComponent ],
  providers   : [ CategoryLookupService ]
} )
export class PayeeModule {
}
