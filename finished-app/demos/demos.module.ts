import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoNgIfComponent } from './ngif.component';
import { DemosRoutingModule } from './demos-routing.module';
import { DemosListComponent } from './demos-list.component';
import { DemoEventHandlingComponent } from './event-handling.component';
import { StaticDataService } from './static-data.provider';
import { DemoStaticDataComponent } from './static-data.component';
import { PeopleLocalDAO } from './people-local-dao.provider';

@NgModule( {
  imports     : [ CommonModule, DemosRoutingModule ],
  exports     : [],
  declarations: [ DemosListComponent, DemoNgIfComponent,
                  DemoEventHandlingComponent,
                  DemoStaticDataComponent ],
  providers   : [ StaticDataService, PeopleLocalDAO ],
} )
export class DemosModule {
}
