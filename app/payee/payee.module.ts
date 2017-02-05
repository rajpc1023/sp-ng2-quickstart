import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayeesComponent } from './payees.component';
import { PayeeDetailComponent } from './payee-detail.component';
import { PayeesListComponent } from './payees-list.component';
import { HttpModule } from '@angular/http';
import { PayeesDAO } from './payees-dao.service';

@NgModule( {
  imports     : [ CommonModule, HttpModule ],
  declarations: [ PayeesComponent, PayeeDetailComponent, PayeesListComponent ],
  exports     : [ PayeesComponent ],
  providers   : [ PayeesDAO ]
} )
export class PayeeModule {
}

