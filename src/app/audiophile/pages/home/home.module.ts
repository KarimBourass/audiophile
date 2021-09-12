import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeroComponent } from './component/hero/hero.component';
import { RouterModule, Routes } from '@angular/router';
import { UnderHeroComponent } from './component/under-hero/under-hero.component';
import { ProductsAdComponent } from './component/products-ad/products-ad.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];



@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    UnderHeroComponent,
    ProductsAdComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]

})
export class HomeModule { }
