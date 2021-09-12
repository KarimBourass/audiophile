import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeforeFooterComponent } from './components/before-footer/before-footer.component';



@NgModule({
  declarations: [
    BeforeFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BeforeFooterComponent
  ]
})
export class SharedModule { }
