import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  showProductModal = false;

  onShowModal(showModal: boolean) {
    this.showProductModal = showModal;
  }

  constructor() { }

  ngOnInit() {
  }

}
