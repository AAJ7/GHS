import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', component: CartComponent },
  { path: 'cart-details', component: CartDetailsComponent},
  { path: 'shopping-cart', component: ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
