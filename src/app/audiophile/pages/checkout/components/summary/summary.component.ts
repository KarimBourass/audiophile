import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {


  @Output() onSubmitForm: EventEmitter<number> = new EventEmitter();

  cart: any[] = [];
  total: number = 0;
  grandTotal: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem("products") || "[]");
    this.calculateTotal();
  }

  calculateTotal() {
    this.cart.forEach((product: any) => {
      this.total = this.total + product.price * product.qte;
    });
    this.grandTotal = this.total + 50 + 1079;
    localStorage.setItem('products', JSON.stringify(this.cart))
  }


  submitForm() {
    this.onSubmitForm.emit(this.grandTotal)
  }

}
