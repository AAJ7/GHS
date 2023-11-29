import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating-us',
  templateUrl: './rating-us.component.html',
  styleUrls: ['./rating-us.component.scss']
})
export class RatingUsComponent implements OnInit {
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
