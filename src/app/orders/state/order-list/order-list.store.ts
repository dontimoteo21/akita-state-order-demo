import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Order } from '../order.model';

export interface OrderListState extends EntityState<Order> {
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'order-list' })
export class OrderListStore extends EntityStore<OrderListState, Order> {
}
