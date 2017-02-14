import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionDetailComponent } from './transaction-detail.component';
import { TransactionsListComponent } from './transactions-list.component';
import { TransactionsSearchComponent } from './transactions-search.component';

const txRoutes: Routes = [
  {
    path     : 'tx/search',
    component: TransactionsSearchComponent
  },
  {
    path     : 'tx/list',
    component: TransactionsListComponent
  },
  {
    path     : 'tx/detail/:id',
    component: TransactionDetailComponent
  },
  {
    path      : 'tx',
    redirectTo: 'tx/search',
    pathMatch : 'full'
  }
];

@NgModule( {
  imports: [
    RouterModule.forChild( txRoutes )
  ],
  exports: [
    RouterModule
  ]
} )
export class TransactionsRoutingModule {
}
