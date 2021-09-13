import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeforeFooterComponent } from './components/before-footer/before-footer.component';
import { CategoriesComponent } from './components/categories/categories.component';



@NgModule({
  declarations: [
    BeforeFooterComponent,
    CategoriesComponent
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
