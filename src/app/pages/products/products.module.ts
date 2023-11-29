import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductModalComponent } from './components/product-modal/product-modal.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    SwiperModule
  ],
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    ProductModalComponent
  ]
})
export class ProductsModule { }
