import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { OffersComponent } from './offers.component';
import { OffersRoutingModule } from './offers-routing.module';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    OffersRoutingModule,
    SharedModule,
    SwiperModule
  ],
  declarations: [OffersComponent]
})
export class OffersModule { }
