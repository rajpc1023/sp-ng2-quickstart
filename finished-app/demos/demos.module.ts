import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { DemosRoutingModule } from './demos-routing.module';
import { DemosListComponent } from './demos-list.component';
import { DemoNgIfComponent } from './ngif.component';
import { DemoEventHandlingComponent } from './event-handling.component';
import { StaticDataService } from './static-data.provider';
import { DemoStaticDataComponent } from './static-data.component';
import { PeopleLocalDAO } from './people-local-dao.provider';
import { PeopleRemoteDAO } from './people-remote-dao.provider';
import { PipesDemoComponent } from './pipes-demo.component';
import {
  DemoParentComponent,
  DemoChildComponent
} from './passing-data.component';
import {
  EventParentComponent,
  EventChildComponent
} from './custom-events.component';
import { IteratingDataComponent } from './iterating-data.component';
import { TrackByComponent } from './track-by.component';

@NgModule( {
  imports: [ CommonModule, HttpModule, FormsModule, DemosRoutingModule ],
  exports: [],
  declarations: [ DemosListComponent, DemoNgIfComponent,
                  DemoEventHandlingComponent, DemoStaticDataComponent,
                  PipesDemoComponent, DemoParentComponent, DemoChildComponent,
                  EventParentComponent, EventChildComponent,
                  IteratingDataComponent,
                  TrackByComponent ],
  providers: [ StaticDataService, PeopleLocalDAO, PeopleRemoteDAO ],
} )
export class DemosModule {
}


