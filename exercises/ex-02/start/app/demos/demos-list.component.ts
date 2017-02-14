import { Component, OnInit } from '@angular/core';

@Component( {
  moduleId: module.id,
  selector: 'demos-list',
  template: `
<ul>
<li><a routerLink="/demos/ng-if">Conditionally displaying data</a></li>
<li><a routerLink="/demos/event-handling">Event Handling</a></li>
<li><a routerLink="/demos/static-data-service">Static Data Service</a></li>
</ul>
`
} )
export class DemosListComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}
