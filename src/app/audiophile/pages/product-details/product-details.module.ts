import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductInfoComponent } from './component/product-info/product-info.component';
import { ProductFeaturesComponent } from './component/product-features/product-features.component';
import { ProductImagesComponent } from './component/product-images/product-images.component';
import { OtherProductComponent } from './component/other-product/other-product.component';


const routes: Routes = [
  {
    path: '',
    component: ProductDetailsComponent,
  }
];

@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductInfoComponent,
    ProductFeaturesComponent,
    ProductImagesComponent,
    OtherProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductDetailsModule { }
