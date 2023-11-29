import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdatedSuccessfullyRoutingModule } from './updated-successfully-routing.module';
import { UpdatedSuccessfullyComponent } from './components/updated-successfully/updated-successfully.component';


@NgModule({
  declarations: [
    UpdatedSuccessfullyComponent
  ],
  imports: [
    CommonModule,
    UpdatedSuccessfullyRoutingModule
  ]
})
export class UpdatedSuccessfullyModule { }
