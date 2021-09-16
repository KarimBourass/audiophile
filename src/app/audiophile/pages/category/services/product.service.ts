import { Injectable } from '@angular/core';
import { products } from 'src/app/shared/data/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }


  getProductById(id: string) {
    return products;
  }

  getProductBySlug(slug: string) {
    return products.filter(product => product.slug == slug);
  }


  getProductByCategory(cat: string) {
    return products.filter(product => product.category == cat);
  }


}
