import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    SwiperModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
