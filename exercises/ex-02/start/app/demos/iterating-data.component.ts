import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PeopleLocalDAO } from './people-local-dao.provider';
import { Person } from './Person';

@Component( {
  moduleId: module.id,
  selector: 'iterate-data',
  template: `
<table class="table">
<thead>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
</thead>
<tbody>
  <tr *ngFor="let person of people; let isEven = even"
      [style.backgroundColor] = 'isEven ? "gray" : "white"'>
    <td>{{ person.name }}</td>
    <td>{{ person.age }}</td>
  </tr>
</tbody>
</table>
`
} )
export class IteratingDataComponent implements OnInit {
  people: Person[];

  constructor( private dao: PeopleLocalDAO ) {
  }

  ngOnInit() {
    this.dao.query()
      .then( people => this.people = people );
  }
}
