import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { Routes, RouterModule } from '@angular/router';
import { SummaryComponent } from './components/summary/summary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderDialogComponent } from './components/order-dialog/order-dialog.component';


const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
  }
];


@NgModule({
  declarations: [
    CheckoutComponent,
    SummaryComponent,
    OrderDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CheckoutModule { }
