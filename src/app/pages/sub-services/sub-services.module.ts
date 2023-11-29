
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SubServicesComponent } from './sub-services.component';
import { SubServicesRoutingModule } from './sub-services-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SubServicesRoutingModule,
    SharedModule
  ],
  declarations: [SubServicesComponent]
})
export class ServicesModule { }
