/*
 * Objectives:
 * + Create a module, PayeesModule
 * + Create a component, PayeesComponent
 * + Register PayeesComponent with PayeesModule
 * + Register PayeesModule with BankingModule
 *
 * Files you will work with:
 * + app/payee/payee.module.ts
 * + app/payee/payees.component.ts
 * + app/banking.module.ts
 * + app/banking-routing.module.ts
 *
 * Go to app/payee/payees.component.ts and follow the directions there,
 * then return here.
 *
 * Welcome back! Write a module, PayeeModule, which imports the right
 * Angular dependencies (NgModule, etc) and also PayeeComponent. Make sure you
 * do not forget to declare PayeeComponent as part of PayeeModule.
 * Then go to app/banking.module.ts
 *
 * Welcome back again. Your part of the application should be ready for testing
 * In your browser, either click on the "Payees" link in the main toolbar, or
 * navigate to http://localhost:3000/payees directly.
 *
 * If you have problems you cannot solve, please ask your instructor for help.
 *
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayeesComponent } from './payees.component'

@NgModule( {
  imports     : [ CommonModule ],
  declarations: [ PayeesComponent ]
} )
export class PayeeModule {
}
