import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesCompaniesComponent } from './categories-companies/categories-companies.component';
import { CategoriesCompaniesProductsComponent } from './categories-companies-products/categories-companies-products.component';
import { CategoriesSubCategoriesComponent } from './categories-sub-categories/categories-sub-categories.component';

const routes: Routes = [
  {path : ""                                               , component : CategoriesComponent} ,
  {path : ":id/sub-categories"                             , component : CategoriesSubCategoriesComponent } ,
  {path : ":id/companies"               , component : CategoriesCompaniesComponent } ,
  {path : ":id/sub-categories/:id/companies"               , component : CategoriesCompaniesComponent } ,
  {path : ":id/sub-categories/:id/companies/:id/products"  , component : CategoriesCompaniesProductsComponent } ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
