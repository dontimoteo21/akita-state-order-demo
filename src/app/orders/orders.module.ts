import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatTableModule, MatListModule, MatProgressSpinnerModule, MatProgressBarModule } from '@angular/material';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderRowsComponent } from './order-rows/order-rows.component';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,

    MatButtonModule,
    MatTableModule,
    MatListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  declarations: [OrdersListComponent, OrderDetailsComponent, OrderRowsComponent]
})
export class OrdersModule { }
