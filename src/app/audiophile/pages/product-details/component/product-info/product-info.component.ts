import { products } from './../../../../../shared/data/products';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  @Input() product: any;
  productQte = 0

  constructor() { }

  ngOnInit(): void {
  }


  minusQte() {
    if (this.productQte != 0) {
      this.productQte = this.productQte - 1;
    }
  }

  addQte() {
    this.productQte = this.productQte + 1;
  }

  addToCart(product: any) {

    let newCart = []

    const oldCart = JSON.parse(localStorage.getItem("products") || "[]");
    console.log('Already in the store', oldCart);

    const toStore = {
      id: product.id,
      price: product.price,
      nane: product.name,
      qte: this.productQte
    }

    if (!oldCart.length) {
      newCart = [toStore]
      localStorage.setItem('products', JSON.stringify(newCart))
    }
    else {
      oldCart.forEach((pct: any) => {
        if (pct.id == product.id) {
          pct.qte = pct.qte + this.productQte
          newCart = [...oldCart]
          localStorage.setItem('products', JSON.stringify(newCart))
        }
        else {
          newCart = [...oldCart, toStore]
          localStorage.setItem('products', JSON.stringify(newCart))
        }
      });
    }



  }

}
