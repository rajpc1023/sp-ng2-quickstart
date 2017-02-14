import { Component, Input, OnInit } from '@angular/core';
import { PeopleLocalDAO } from './people-local-dao.provider';
import { Person } from './Person';

@Component( {
  moduleId: module.id,
  selector: 'parent-data',
  template: `
<div style="border: 2px blue dashed">
  <h2>The parent component</h2>
  <h3>Below this, the child component</h3>
  <div style="border: 2px green solid">
    <child-data [person]="person"></child-data>
  </div>
</div>
`,
  styles  : [
    'div {margin: 10px; padding: 10px}'
  ]
} )
export class DemoParentComponent implements OnInit {
  person: Person;

  constructor( private dao: PeopleLocalDAO ) {
  }

  ngOnInit() {
    this.dao.findById( '201' )
      .then( person => this.person = person );
  }
}

@Component( {
  moduleId: module.id,
  selector: 'child-data',
  template: `
<ul *ngIf="person">
<li>{{ person.name }}</li>
<li>{{ person.age }}</li>
<li>{{ person.gender }}</li>
</ul>`
} )
export class DemoChildComponent {

  @Input()
  person: Person;
}
