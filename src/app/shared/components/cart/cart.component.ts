import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: any[] = [];
  total: number = 0;
  constructor() { }

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem("products") || "[]");
    this.calculateTotal();
  }


  minusQte(product: any) {
    this.cart.filter(pro => pro.id == product.id && pro.qte > 0)
      .map(product => {
        product.qte = product.qte - 1;
        if (product.qte > 0) {
          localStorage.setItem('products', JSON.stringify(this.cart));
        } else {
          this.cart.splice(this.cart.indexOf(product), 1);
        }
        this.changeQte("minus", product.price);
      });
  }

  addQte(product: any) {
    this.cart.filter(pro => pro.id == product.id)
      .map(product => {
        product.qte = product.qte + 1;
        localStorage.setItem('products', JSON.stringify(this.cart));
        this.changeQte("add", product.price);
      });

  }

  changeQte(operation: string, price: number) {
    if (operation == "add") this.total = this.total + price
    else this.total = this.total - price
  }


  calculateTotal() {
    this.cart.forEach((product: any) => {
      this.total = this.total + product.price * product.qte;
    });
    localStorage.setItem('products', JSON.stringify(this.cart))

  }

  removeAll() {
    localStorage.setItem('products', JSON.stringify([]));
    this.cart = [];
    this.total = 0;
  }



}
