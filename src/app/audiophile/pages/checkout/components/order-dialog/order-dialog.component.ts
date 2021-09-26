import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.scss']
})
export class OrderDialogComponent implements OnInit {

  cart: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem("products") || "[]");
  }

}
