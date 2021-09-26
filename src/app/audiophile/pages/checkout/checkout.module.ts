import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { SummaryComponent } from './components/summary/summary.component';


const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
  }
];


@NgModule({
  declarations: [
    CheckoutComponent,
    CheckoutFormComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CheckoutModule { }
