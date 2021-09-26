import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

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
