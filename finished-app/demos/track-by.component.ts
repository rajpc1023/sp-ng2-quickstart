import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PeopleRemoteDAO } from './people-remote-dao.provider';
import { Person } from './Person';

@Component( {
  moduleId: module.id,
  selector: 'track-by',
  template: `
<table class="table">
<thead>
  <tr>
    <td class="text-center" colspan="2">
    <div class="btn-group">
      <button class="btn btn-default" (click)="refreshData({gender: 'female'})">Women</button>
      <button class="btn btn-default" (click)="refreshData()">Both</button>
      <button class="btn btn-default" (click)="refreshData({gender: 'male'})">Men</button>
    </div>
    </td>
  </tr>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
</thead>
<tbody>
<!--
First, try without the track by statement. Then comment out the line below
and comment in the line after it (toggle the lines)
-->
  <tr *ngFor="let person of people">
  <!--<tr *ngFor="let person of people; trackBy:comparePeople"-->
    <td>{{ person.name }}</td>
    <td>{{ person.age }}</td>
  </tr>
</tbody>
</table>
`
} )
export class TrackByComponent implements OnInit {
  people: Person[];

  constructor( private dao: PeopleRemoteDAO ) {
  }

  ngOnInit() {
    this.dao.query( { gender: 'female' } )
      .then( people => this.people = people );
  }

  refreshData( criteria ) {
    this.dao.query( criteria )
      .then( people => this.people = people );
  }

  comparePeople( index, item ) {
    return item.id;
  }
}
