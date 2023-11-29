import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesComponent } from './companies.component';

@NgModule({
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    SharedModule
  ],
  declarations: [CompaniesComponent]
})
export class CompaniesModule { }
