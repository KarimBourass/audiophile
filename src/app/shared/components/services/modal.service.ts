import { OrderDialogComponent } from './../../../audiophile/pages/checkout/components/order-dialog/order-dialog.component';
import { CartComponent } from './../cart/cart.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog) { }


  openCartDialog() {
    const dialogRef = this.dialog.open(CartComponent, {
      position: {
        top: '30px',
        right: '30px'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openFinalOrderDialog(grandTotal: number) {
    const dialogRef = this.dialog.open(OrderDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
