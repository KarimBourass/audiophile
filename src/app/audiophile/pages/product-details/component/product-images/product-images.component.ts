import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.scss']
})
export class ProductImagesComponent implements OnInit {

  @Input() product: any;

  constructor() { }

  ngOnInit(): void {
  }

}
