import { QueryEntity } from '@datorama/akita';
import { OrderListState, OrderListStore } from './order-list.store';
import { Order } from '../order.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OrderListQuery extends QueryEntity<OrderListState, Order> {
  constructor(protected store: OrderListStore) {
    super(store);
  }
}
