/*
 * Uncomment the two lines below. (If we had left that in, the application would break!)
 *
 * (This file sets up URL routing, which we will cover later in the course.)
 *
 * Then return to payee.module.ts
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './category/categories.component';
import { PageNotFoundComponent } from './common/page-not-found.component';

// UNCOMMENT THE LINE BELOW
import { PayeesComponent } from './payee/payees.component';

const routes: Routes = [
  { path: 'categories', component: CategoriesComponent},

  // UNCOMMENT THIS LINE AS WELL
  { path: 'payees', component: PayeesComponent},
  { path: '', redirectTo: '/tx/search', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class BankingRoutingModule {}
