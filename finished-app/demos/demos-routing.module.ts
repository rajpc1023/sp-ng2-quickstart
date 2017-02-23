import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemosListComponent } from './demos-list.component';
import { DemoNgIfComponent } from './ngif.component';
import { ComponentWithDataComponent } from './component-with-data';
import { UsingTemplateComponent } from './using-template.component';
import { DemoEventHandlingComponent } from './event-handling.component';
import { DemoStaticDataComponent } from './static-data.component';
import { PipesDemoComponent } from './pipes-demo.component';
import { DemoParentComponent } from './passing-data.component';
import { EventParentComponent } from './custom-events.component';
import { IteratingDataComponent } from './iterating-data.component';
import { TrackByComponent } from './track-by.component';
import { ParentComponent } from './sibling-communication.component';
import { DemoNgModelComponent } from './ngmodel.component';
import { ServiceDependencyComponent } from './service-dependency.component';

const demoRoutes: Routes = [
  { path: 'demos/list', component: DemosListComponent },
  { path: 'demos/ng-if', component: DemoNgIfComponent },
  { path: 'demos/component-with-data', component: ComponentWithDataComponent },
  { path: 'demos/using-template', component: UsingTemplateComponent },
  { path: 'demos/event-handling', component: DemoEventHandlingComponent },
  { path: 'demos/static-data-service', component: DemoStaticDataComponent },
  { path: 'demos/pipes-demo', component: PipesDemoComponent },
  { path: 'demos/passing-data', component: DemoParentComponent },
  { path: 'demos/custom-events', component: EventParentComponent },
  { path: 'demos/iterating-data', component: IteratingDataComponent },
  { path: 'demos/track-by', component: TrackByComponent },
  { path: 'demos/sibling-communication', component: ParentComponent },
  { path: 'demos/ng-model', component: DemoNgModelComponent},
  { path: 'demos/service-dependency', component: ServiceDependencyComponent},
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
