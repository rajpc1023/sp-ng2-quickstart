/*
 * Add an EventEmmiter and an Output parameter "select". It should be called
 * when the user clicks on a row
 *
 * Which means that you should also add an event handler, callSelect(), to each
 * table row, which invokes the EventEmitter, passing back the Payee which
 * was clicked on.
 *
 * Then go to payees-list.component.html and add the event handler to each <tr>
 *
 */
import { Component, Input } from '@angular/core';

@Component( {
  moduleId: module.id,
  selector: 'payees-list',
  templateUrl: 'payees-list.component.html'
} )
export class PayeesListComponent {

  @Input()
  payees: Payee[];
}
