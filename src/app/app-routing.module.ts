import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'category/:id',
    loadChildren: () => import('./audiophile/pages/category/category.module').then(m => m.CategoryModule),
    data: {
      title: 'Category',
      description: 'Audiophile category page'
    }
  },
  {
    path: 'product/:id',
    loadChildren: () => import('./audiophile/pages/product-details/product-details.module').then(m => m.ProductDetailsModule),
    data: {
      title: 'Product',
      description: 'Audiophile Product page'
    }
  },
  {
    path: 'checkout',
    loadChildren: () => import('./audiophile/pages/checkout/checkout.module').then(m => m.CheckoutModule),
    data: {
      title: 'checkout',
      description: 'Audiophile checkout page'

    }
  },
  {
    path: '',
    loadChildren: () => import('./audiophile/pages/home/home.module').then(m => m.HomeModule),
    data: {
      title: '',
      description: 'Audiophile Home page'
    }
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
