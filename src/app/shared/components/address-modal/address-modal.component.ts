import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-address-modal',
  templateUrl: './address-modal.component.html',
  styleUrls: ['./address-modal.component.scss']
})
export class AddressModalComponent implements OnInit {
  showMap = false;

  @Input() show: boolean = false;
  @Output() hideModal = new EventEmitter<boolean>();

  close() {
    this.hideModal.emit(false);
    this.show = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
