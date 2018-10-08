import { QueryEntity } from '@datorama/akita';
import { OrderState, OrderStore } from './order.store';
import { Order } from './order.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderQuery extends QueryEntity<OrderState, Order> {
  constructor(protected store: OrderStore) {
    super(store);
  }
}
