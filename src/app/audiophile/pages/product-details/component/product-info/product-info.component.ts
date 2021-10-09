import { ModalService } from 'src/app/shared/components/services/modal.service';
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

  constructor(private modalService:ModalService) { }

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

    if (this.productQte > 0) {
      let newCart = []
      const oldCart = JSON.parse(localStorage.getItem("products") || "[]");
      const toStore = {
        id: product.id,
        price: product.price,
        name: product.name,
        qte: this.productQte,
        image: product.image.mobile
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
      this.modalService.openCartDialog();
      this.productQte = 0;
    }


  }

}
