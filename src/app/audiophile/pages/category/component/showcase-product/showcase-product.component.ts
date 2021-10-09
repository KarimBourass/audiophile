import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-product',
  templateUrl: './showcase-product.component.html',
  styleUrls: ['./showcase-product.component.scss']
})
export class ShowcaseProductComponent implements OnInit {

  @Input() product: any;
  constructor() { }

  ngOnInit(): void {
  }

}
