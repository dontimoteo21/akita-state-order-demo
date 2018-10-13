import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { OrderListService } from '../state/order-list/order-list.service';
import { OrderListQuery } from '../state/order-list/order-list.query';
import { Order } from '../state/order.model';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersListComponent implements OnInit {

  loading$: Observable<boolean>;
  orders$: Observable<Order[]>;

  constructor(
    private orderListService: OrderListService,
    private orderListQuery: OrderListQuery
    ) { }

  ngOnInit() {
    if (this.orderListQuery.isPristine) {
      this.orderListService.getAll();
    }

    this.loading$ = this.orderListQuery.selectLoading();
    this.orders$ = this.orderListQuery.selectAll();
  }

}
