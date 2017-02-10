/*
 * Objectives:
 * + Add a route for PayeeDetailComponent
 * + Call the detail route from PayeeListComponent
 * + Access the parameters in PayeeDetailComponent
 *
 * We will be adding real routing among our various components. In particular,
 * + The detail route should be parameterized, allowing for a Payee ID to be
 *   passed in
 * + When a row is clicked on in the PayeesListComponent, the route should change
 *   to the PayeeDetailComponent route with the appropriate id
 * + In PayeeDetailComponent, there should be some code that allows users to
 *   navigate back to PayeesListComponent
 *
 * Starting here, change the PayeeDetail route so that it accepts a parameter,
 * ID, after the payees/detail/ part of the URL.
 *
 * Then to go payees-list.component.ts.
 *
 *
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayeeDetailComponent } from './payee-detail.component';
import { PayeesListComponent } from './payees-list.component';

const payeeRoutes: Routes = [
  {
    path     : 'payees/list',
    component: PayeesListComponent
  },
  {
    path     : 'payees/detail',
    component: PayeeDetailComponent
  },
  {
    path      : 'payees',
    redirectTo: 'payees/list',
    pathMatch : 'full'
  }
];

@NgModule( {
  imports: [
    RouterModule.forChild( payeeRoutes )
  ],
  exports: [
    RouterModule
  ]
} )
export class PayeesRoutingModule {
}
