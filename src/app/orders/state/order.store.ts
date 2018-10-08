import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Order } from './order.model';

export interface OrderState extends EntityState<Order> {
  totalPrice: number;
}

const initialState: OrderState = {
  totalPrice: 0
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'order' })
export class OrderStore extends EntityStore<OrderState, Order> {

  constructor() {
    super(initialState);
  }

}
