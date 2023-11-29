import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactUsComponent } from './contact-us.component';
import { ContactUsRoutingModule } from './contact-us-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    SharedModule
  ],
  declarations: [ContactUsComponent]
})
export class ContactUsModule { }
