import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'category/:id',
    loadChildren: () => import('./audiophile/pages/category/category.module').then(m => m.CategoryModule),
  },
  {
    path: '',
    loadChildren: () => import('./audiophile/pages/home/home.module').then(m => m.HomeModule),
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
