import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './category/categories.component';
import { PageNotFoundComponent } from './common/page-not-found.component';

const routes: Routes = [
  { path: 'categories', component: CategoriesComponent},
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
