import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesCompaniesComponent } from './categories-companies/categories-companies.component';
import { CategoriesCompaniesProductsComponent } from './categories-companies-products/categories-companies-products.component';
import { CategoriesSubCategoriesComponent } from './categories-sub-categories/categories-sub-categories.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    CategoriesComponent,
    CategoriesCompaniesComponent,
    CategoriesCompaniesProductsComponent,
    CategoriesSubCategoriesComponent,
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule,
    
  ]
})
export class CategoriesModule { }
