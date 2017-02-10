/*
 * Objectives:
 * + Write a router module for Payees
 * + Let Payees control its routing
 *
 * You will write a router module for Payees.
 * Payees' routing is currently controlled by app/banking-routing.module.ts.
 * We will add on to that routing with our own routing module.
 *
 * Configure three routes:
 * + payees/list should go to PayeesListComponent
 * + payees/detail should go to PayeeDetailComponent
 * + payees should redirect to payees/list
 *
 * Note that PayeesListComponent and PayeeDetailComponent have been replaced
 * simple placeholders. (They will be back for the next exercise.)
 *
 * In the @NgModule decorator, import this as a child router configuration,
 * and export RouterModule.
 *
 * Then go to payee.module.ts
 *
 * Welcome back. To test your code, go to these URLS:
 *
 * http://localhost:3000/payees/list (Should show PayeesListComponent)
 * http://localhost:3000/payees/detail (Should show PayeeDetailComponent)
 * http://localhost:3000/payees (Should redirect to payees/list and the
 *                               PayeesListComponent)
 *
 * If you have any trouble that you cannot solve, consult with your instructor.
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
