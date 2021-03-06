import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { Routes, RouterModule } from '@angular/router';
import { CategoryHeaderComponent } from './component/category-header/category-header.component';
import { ShowcaseProductComponent } from './component/showcase-product/showcase-product.component';


const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
  }
];


@NgModule({
  declarations: [
    CategoryComponent,
    CategoryHeaderComponent,
    ShowcaseProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CategoryModule { }
