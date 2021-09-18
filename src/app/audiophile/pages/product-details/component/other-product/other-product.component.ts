import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-product',
  templateUrl: './other-product.component.html',
  styleUrls: ['./other-product.component.scss']
})
export class OtherProductComponent implements OnInit {

  @Input() product: any;
  constructor() { }

  ngOnInit(): void {
  }

}
