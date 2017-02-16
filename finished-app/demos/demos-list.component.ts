import { Component } from '@angular/core';

@Component( {
  moduleId: module.id,
  selector: 'demos-list',
  template: `
<ul>
<li><a routerLink="/demos/component-with-data">Component with data</a></li>
<li><a routerLink="/demos/ng-if">Conditionally displaying data</a></li>
<li><a routerLink="/demos/event-handling">Event Handling</a></li>
<li><a routerLink="/demos/static-data-service">Static Data Service</a></li>
<li><a routerLink="/demos/pipes-demo">Pipes Demo</a></li>
<li><a routerLink="/demos/passing-data">Passing Data</a></li>
<li><a routerLink="/demos/custom-events">Custom Events</a></li>
<li><a routerLink="/demos/iterating-data">Iterating Data</a></li>
<li><a routerLink="/demos/track-by">Custom Track By Function</a></li>
<li><a routerLink="/demos/sibling-communication">Sibling Communication</a></li>
<li><a routerLink="/demos/ng-model">ngModel</a></li>
</ul>
`
} )
export class DemosListComponent {
}
