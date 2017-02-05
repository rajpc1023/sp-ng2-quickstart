import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemosListComponent } from './demos-list.component';
import { DemoNgIfComponent } from './ngif.component';
import { DemoEventHandlingComponent } from './event-handling.component';
import { DemoStaticDataComponent } from './static-data.component';

const demoRoutes: Routes = [
  { path: 'demos/list', component: DemosListComponent },
  { path: 'demos/ng-if', component: DemoNgIfComponent },
  { path: 'demos/event-handling', component: DemoEventHandlingComponent },
  { path: 'demos/static-data-service', component: DemoStaticDataComponent },
  {
    path      : 'demos',
    redirectTo: 'demos/list',
    pathMatch : 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(demoRoutes)],
  exports: [RouterModule],
})
export class DemosRoutingModule { }

export const routedComponents = [DemosListComponent];
