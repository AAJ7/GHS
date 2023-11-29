import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {
  qty: number = 1;
  constructor() { }

  ngOnInit() {
  }
  updateCartDetail(parameter: string) {
    if (parameter === 'plus') {
      this.qty++;
    } else if (parameter === 'minus' && this.qty > 1) {
      this.qty--;
    }
  }
}
