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
import { PayeesDAO } from './payees-dao.provider';


@NgModule( {
  imports     : [ CommonModule ],
  declarations: [ PayeesComponent ],
  providers   : [ CategoryLookupService, PayeesDAO ]
} )
export class PayeeModule {
}
