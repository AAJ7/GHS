import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CartComponent,
    CartDetailsComponent,
    ShoppingCartComponent
  ]
})
export class CartModule { }
