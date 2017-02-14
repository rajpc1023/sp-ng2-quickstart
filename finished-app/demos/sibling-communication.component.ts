import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PeopleLocalDAO } from './people-local-dao.provider';
import { Person } from './Person';

@Component( {
  moduleId: module.id,
  selector: 'parent-component',
  template: `

  <h2>The parent component</h2>
<div class="row">
  <div class="col-md-12">
  <p>Below this, a child component which can send messages back to the parent 
  via custom events.</p>
  </div>
</div>
<div class="row">
  <div class="col-md-6">
    <sibling-one [person]="person" (send)="handleSend($event)"></sibling-one>
  </div>
  <div class="col-md-6">
    <sibling-two [person]="sentPerson"></sibling-two>
  </div>
</div>
`,
  styles  : [
    'div.col-md-6 { border: 2px red solid }'
  ]
} )
export class ParentComponent implements OnInit {
  person: Person;
  sentPerson: Person;

  constructor( private dao: PeopleLocalDAO ) {
  }

  ngOnInit() {
    this.dao.findById( '201' )
      .then( person => this.person = person );
  }

  handleSend( returnedPerson ) {
    console.log( 'Passed back this person: ', returnedPerson );
    this.sentPerson = returnedPerson
  }
}

@Component( {
  moduleId: module.id,
  selector: 'sibling-one',
  template: `
<div>
<h3>Sibling One</h3>
<ul *ngIf="person">
<li>{{ person.name }}</li>
<li>{{ person.age }}</li>
<li>{{ person.gender }}</li>
</ul>
  <div>
  <button class="btn btn-default" (click)="sendPerson(person)">Send to sibling two</button>
  </div>
</div>
`
} )
export class SiblingOneComponent {

  @Input()
  person: Person;

  @Output()
  send: EventEmitter<Person> = new EventEmitter<Person>();

  sendPerson( person ) {
    this.send.emit( person );
  }
}

@Component( {
  moduleId: module.id,
  selector: 'sibling-two',
  template: `
<div>
<h3>Sibling Two</h3>
<ul *ngIf="person">
<li>{{ person.name }}</li>
<li>{{ person.age }}</li>
<li>{{ person.gender }}</li>
</ul>
</div>
`
} )
export class SiblingTwoComponent {

  @Input()
  person: Person;
}
