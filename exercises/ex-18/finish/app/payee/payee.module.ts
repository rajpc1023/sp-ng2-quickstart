import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PayeesComponent } from './payees.component';
import { PayeeDetailComponent } from './payee-detail.component';
import { PayeesListComponent } from './payees-list.component';

import { CategoryLookupService } from './category-lookup.provider';
import { PayeesDAO } from './payees-dao.provider';

@NgModule( {
  imports     : [ CommonModule, FormsModule, HttpModule ],
  declarations: [ PayeesComponent, PayeeDetailComponent, PayeesListComponent ],
  providers   : [ CategoryLookupService, PayeesDAO ]
} )
export class PayeeModule {
}
