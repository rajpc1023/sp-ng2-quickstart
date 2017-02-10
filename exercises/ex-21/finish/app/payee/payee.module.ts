import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PayeeDetailComponent } from './payee-detail.component';
import { PayeesListComponent } from './payees-list.component';
import { PayeesGridComponent } from './payees-grid.component';

import { CategoryLookupService } from './category-lookup.provider';
import { PayeesDAO } from './payees-dao.provider';
import { PayeesRoutingModule } from './payees-routing.module';

@NgModule( {
  imports     : [ CommonModule, FormsModule, HttpModule, PayeesRoutingModule ],
  declarations: [ PayeeDetailComponent, PayeesListComponent, PayeesGridComponent ],
  providers   : [ CategoryLookupService, PayeesDAO ]
} )
export class PayeeModule {
}
