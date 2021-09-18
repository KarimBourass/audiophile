import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeforeFooterComponent } from './components/before-footer/before-footer.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CartComponent } from './components/cart/cart.component';



@NgModule({
  declarations: [
    BeforeFooterComponent,
    CategoriesComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BeforeFooterComponent,
    CategoriesComponent
  ]
})
export class SharedModule { }
