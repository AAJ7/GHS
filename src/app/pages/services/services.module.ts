import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';

@NgModule({
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule
  ],
  declarations: [ServicesComponent]
})
export class ServicesModule { }
