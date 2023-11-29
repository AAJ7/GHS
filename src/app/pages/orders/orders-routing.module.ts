import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { EasyOrderComponent } from './components/easy-order/easy-order.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';

const routes: Routes = [
  { path: '', component: OrdersComponent },
  { path: 'order-details', component: OrderDetailsComponent },
  { path: 'easy-order', component: EasyOrderComponent},
  { path: 'my-orders', component: MyOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
