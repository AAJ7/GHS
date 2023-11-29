import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AngularSvgIconModule } from 'angular-svg-icon';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { ImageComponent } from './components/image/image.component';
import { OfferCardComponent } from './components/offer-card/offer-card.component';
import { SearchComponent } from './components/search/search.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { BarRatingModule } from "ngx-bar-rating";
import { CompanyCardComponent } from './components/company-card/company-card.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { IsArLangDirective } from './directives/isAr-lang.directive';
import { IsEnLangDirective } from './directives/isEn-lang.directive';
import { ClothesCardComponent } from './components/clothes-card/clothes-card.component';
import { MapLocationComponent } from './components/map-location/map-location.component';
import { AgmCoreModule } from '@agm/core';
import { RouterModule } from '@angular/router';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { RatingUsComponent } from './components/rating-us/rating-us.component';
import { PaymentLoaderComponent } from './components/payment-loader/payment-loader.component';
import { AddressModalComponent } from './components/address-modal/address-modal.component';
import { MapModalComponent } from './components/map-modal/map-modal.component';
import { SomethingWrongComponent } from './components/something-wrong/something-wrong.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { NgxStarsModule } from 'ngx-stars';
import { environment } from 'src/environments/environment';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxOtpInputModule } from 'ngx-otp-input';

@NgModule({
  declarations: [
    ImageComponent,
    OfferCardComponent,
    SearchComponent,
    ProductCardComponent,
    CompanyCardComponent,
    ServiceCardComponent,
    IsArLangDirective,
    IsEnLangDirective,
    ClothesCardComponent,
    MapLocationComponent,
    RatingUsComponent,
    PaymentLoaderComponent,
    AddressModalComponent,
    MapModalComponent,
    SomethingWrongComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    LazyLoadImageModule,
    BarRatingModule,
    TranslateModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsAPiKey,
      libraries: ['places']
    }),
    AgmJsMarkerClustererModule,
    RouterModule,
    ReactiveFormsModule,
    NgxStarsModule,
    FormsModule,
    NgxSpinnerModule,
    NgxOtpInputModule
  ],
  exports: [
    HttpClientModule,
    AngularSvgIconModule,
    ImageComponent,
    OfferCardComponent,
    SearchComponent,
    ProductCardComponent,
    CompanyCardComponent,
    ServiceCardComponent,
    TranslateModule,
    IsArLangDirective,
    IsEnLangDirective,
    ClothesCardComponent,
    MapLocationComponent,
    RatingUsComponent,
    PaymentLoaderComponent,
    AddressModalComponent,
    MapModalComponent,
    SomethingWrongComponent,
    RouterModule,
    ReactiveFormsModule,
    NgxStarsModule,
    FormsModule,
    NgxSpinnerModule,
    NgxOtpInputModule
  ],
})
export class SharedModule {}
