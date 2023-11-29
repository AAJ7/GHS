import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation} from 'swiper';
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {
  @Input() show: boolean = false;
  @Input() image:string = '';
  @Output() hideModal = new EventEmitter<boolean>();

  close() {
    this.hideModal.emit(false);
    this.show = false;
  }

  swiperConfig: SwiperOptions = {
    spaceBetween: 10,
    slidesPerView: 1,
    navigation: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      720: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
