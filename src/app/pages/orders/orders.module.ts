import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrdersComponent } from './orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { EasyOrderComponent } from './components/easy-order/easy-order.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule
  ],
  declarations: [
    OrdersComponent,
    OrderDetailsComponent,
    EasyOrderComponent,
    MyOrdersComponent
  ]
})
export class OrdersModule { }
