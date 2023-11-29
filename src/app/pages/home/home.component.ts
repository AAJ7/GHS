import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NgxSpinnerService } from "ngx-spinner";
import { HomeService } from 'src/app/core/services/home/home.service';
import SwiperCore, { SwiperOptions, Navigation, Pagination, EffectCoverflow} from 'swiper';
SwiperCore.use([Navigation, Pagination, EffectCoverflow]);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string = "";
  content: string = "";
  button: string = "";
  slider_images:any[] = [];
  swiperFullConfig: SwiperOptions = {
    slidesPerView: 1,
    navigation: true,
    pagination: { clickable: true },
    spaceBetween: 15,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  };

  constructor(
    private Home: HomeService,
    private NgxSpinner: NgxSpinnerService,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.home();
  }

  home() {
    this.NgxSpinner.show();
    this.Home.get().subscribe({
      next:(response)=> {
        if(this.document.dir == "ltr") {
          this.title = response?.data?.home_page?.title_en;
          this.content = response?.data?.home_page?.content_en;
          this.button = response?.data?.home_page?.button_text_en;
        } else if(this.document.dir == "rtl") {
          this.title = response?.data?.home_page?.title_ar;
          this.content = response?.data?.home_page?.content_ar;
          this.button = response?.data?.home_page?.button_text_ar;
        }
        this.slider_images = response?.data?.home_page?.slider_images;
        this.NgxSpinner.hide();
      }
    });
  }
}
