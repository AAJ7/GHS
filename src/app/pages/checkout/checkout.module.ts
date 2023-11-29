import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { environment } from 'src/environments/environment';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsAPiKey,
      libraries: ['places']
    }),
  ],
  declarations: [CheckoutComponent]
})
export class CheckoutModule { }
