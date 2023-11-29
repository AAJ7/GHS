import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-clothes-card',
  templateUrl: './clothes-card.component.html',
  styleUrls: ['./clothes-card.component.scss']
})
export class ClothesCardComponent implements OnInit {
  @Input() image:string = '';
  @Output() showModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  showProductModal = false;

  onShowModal() {
    this.showProductModal = true;
    this.showModal.emit(this.showProductModal);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
