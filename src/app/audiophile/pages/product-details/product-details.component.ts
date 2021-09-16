import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../category/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: any;
  productQte = 0
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    let res = []
    this.route.parent?.paramMap.subscribe(
      (data: any) => {
        res = this.productService.getProductBySlug(data?.params.id);
        this.product = res[0]
        console.log('pr', this.product);

      }
    )
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
