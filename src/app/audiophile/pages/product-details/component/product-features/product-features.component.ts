import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-features',
  templateUrl: './product-features.component.html',
  styleUrls: ['./product-features.component.scss']
})
export class ProductFeaturesComponent implements OnInit {

  @Input() product: any;

  constructor() { }


  ngOnInit(): void {
  }

}
