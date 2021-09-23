import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cart: any[] = [];
  total: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem("products") || "[]");
    this.calculateTotal();
  }

  calculateTotal() {
    this.cart.forEach((product: any) => {
      this.total = this.total + product.price * product.qte;
    });
    localStorage.setItem('products', JSON.stringify(this.cart))
  }




}
