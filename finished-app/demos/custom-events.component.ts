import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PeopleLocalDAO } from './people-local-dao.provider';
import { Person } from './Person';

@Component( {
  moduleId: module.id,
  selector: 'parent-event',
  template: `
<div style="border: 2px blue dashed">
  <h2>The parent component</h2>
  <p>Below this, a child component which can send messages back to the parent 
  via custom events.</p>
  <div style="border: 2px green solid">
    <child-event [person]="person" (save)="handleSave($event)"></child-event>
  </div>
</div>
`,
  styles  : [
    'div {margin: 10px; padding: 10px}'
  ]
} )
export class EventParentComponent implements OnInit {
  person: Person;

  constructor( private dao: PeopleLocalDAO ) {
  }

  ngOnInit() {
    this.dao.findById( '201' )
      .then( person => this.person = person );
  }

  handleSave( returnedPerson ) {
    console.log( 'Passed back this person: ', returnedPerson );
  }
}

@Component( {
  moduleId: module.id,
  selector: 'child-event',
  template: `
<div>
<ul *ngIf="person">
<li>{{ person.name }}</li>
<li>{{ person.age }}</li>
<li>{{ person.gender }}</li>
</ul>
  <div>
  <button class="btn btn-default" (click)="callSave(person)">Save me!</button>
  </div>
</div>
`
} )
export class EventChildComponent {

  @Input()
  person: Person;

  @Output()
  save: EventEmitter<Person> = new EventEmitter<Person>();

  callSave( person ) {
    this.save.emit( person );
  }
}
