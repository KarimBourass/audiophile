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

  addToCart(product: any){
    console.log('product',product);

  }

}
