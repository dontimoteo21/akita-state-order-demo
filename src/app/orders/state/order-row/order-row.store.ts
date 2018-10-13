import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Order, OrderRow } from '../order.model';

export interface OrderRowState extends EntityState<OrderRow> {
  totalPrice: number;
}

const initialState: OrderRowState = {
  totalPrice: 0
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'order-row' })
export class OrderRowStore extends EntityStore<OrderRowState, OrderRow> {

  constructor() {
    super(initialState);
  }

}
