import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/core/services/offers/offers.service';
import SwiperCore, { SwiperOptions, Navigation, Pagination, EffectCoverflow} from 'swiper';
SwiperCore.use([Navigation, Pagination]);


@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  SliderOffers: any[] = [];

  swiperConfig: SwiperOptions = {
    spaceBetween: 10,
    slidesPerView: 1,
    navigation: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
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

  constructor(private OffersService: OffersService) { }

  ngOnInit() {
    this.offers();
  }

  offers() {
    this.OffersService.get().subscribe({
      next:(response)=> {
        for(let i = 0; i < response?.data?.slider_offer.length; ++i) {
          this.SliderOffers.push(response?.data?.slider_offer[i].img_path);
        }
        // https://dev.generalhouseservices.com/
        // [src]="'https://dev.generalhouseservices.com/' + row.img_path"
      }
    });
  }
}
