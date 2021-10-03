import { ModalService } from './../../../shared/components/services/modal.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  checkForm = new FormGroup({

    billing: new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      phone: new FormControl()
    }),

    shipping: new FormGroup({
      adresse: new FormControl(),
      zipCode: new FormControl(),
      city: new FormControl(),
      country: new FormControl()
    }),

    payment: new FormGroup({
      paymetMethod: new FormControl(),
      eNumber: new FormControl(),
      ePin: new FormControl()
    }),

  });
  constructor(private orderDialog: ModalService) { }

  ngOnInit(): void {
  }


  onSubmit(grandTotal: number) {
    this.orderDialog.openFinalOrderDialog(grandTotal);
  }





}
