/*
 * PayeesListComponent is now the container component for PayeesGridComponent.
 *
 * When an item in the grid is clicked on, it emits a custom event, payeeSelect,
 * which is received by handlePayeeSelect(). Update handlePayeeSelect() to re-
 * route to the detail route, passing along the ID of the Payee to be displayed.
 *
 * Note that to route programmatically, you will need to update the constructor
 * with a new dependency (Router).
 *
 * Then go to payee-detail.component.ts.
 */
import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { Payee } from './Payee';
import { PayeeFilter } from './PayeeFilter';
import { PayeesDAO } from './payees-dao.provider';
import { CategoryLookupService } from './category-lookup.provider';
import { Router, ActivatedRoute } from '@angular/router';

@Component( {
  moduleId: module.id,
  selector: 'payees-list',
  template: `
<payees-grid [payees]="payees"
             (sort)="handleSort($event)"
             (filter)="handleFilter($event)"
             (payeeSelect)="handlePayeeSelect($event)">
</payees-grid>
`
} )
export class PayeesListComponent implements OnInit, OnDestroy {

  lastSubscription: Subscription;
  payeeFilter: PayeeFilter = new PayeeFilter();
  payees: Payee[];
  originalPayees: Payee[];

  constructor( private lookupService: CategoryLookupService,
               private dao: PayeesDAO,
               private router: Router ) {
  }

  ngOnInit() {
    this.lastSubscription = this.dao.list()
      .subscribe( payees => {
        this.payees = payees;
        this.originalPayees = payees;
      } );
  }

  ngOnDestroy() {
    this.lastSubscription.unsubscribe();
  }

  handlePayeeSelect( payee ) {
    this.router.navigate( [ 'payees', 'detail', payee.id ] );
  }

  handleFilter( payeeFilter: PayeeFilter ) {
    let filterKeys = Object.keys( payeeFilter );
    this.payees = this.originalPayees.filter( payee => {
      let keepPayee = true;

      filterKeys.every( key => {
        if ( payeeFilter[ key ] !== ''
          && payee[ key ].indexOf( payeeFilter[ key ] ) === -1 ) {
          keepPayee = false;
          return false;
        }
        return true;
      } );

      return keepPayee;
    } )
  }

  handleSort( field ) {
    this.payees.sort( function ( a, b ) {
      if ( a[ field ] > b[ field ] ) {
        return 1;
      } else if ( a[ field ] < b[ field ] ) {
        return -1;
      }
      return 0;
    } )
  }
}
