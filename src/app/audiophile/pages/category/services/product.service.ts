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


  getProductByCategory(cat: string) {
    return products.filter(product => product.category == cat);
  }


}
