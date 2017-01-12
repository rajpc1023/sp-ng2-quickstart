import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TxMainComponent } from './tx/tx-main.component';
import { PayeeMainComponent } from './payee/payee-main.component';

const routes: Routes = [
  { path: 'tx', component: TxMainComponent},
  { path: 'payee', component: PayeeMainComponent},
  { path: '', redirectTo: '/tx', pathMatch: 'full' },
  { path: '**', redirectTo: '/tx', pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot( routes );
