import { ProductService } from './services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryName = ''
  products: any[] = [];
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.route.parent?.paramMap.subscribe(
      (data: any) => {
        this.categoryName = data?.params.id,
          this.products = this.productService.getProductByCategory(this.categoryName);
      }
    )
  }

}
