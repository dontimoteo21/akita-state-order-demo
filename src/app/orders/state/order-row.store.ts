import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Order, OrderRow } from './order.model';

export interface OrderRowState extends EntityState<OrderRow> {
  orderName: string;
  orderDate: Date;

  totalPrice: number;
}

const initialState: OrderRowState = {
  orderName: '',
  orderDate: new Date(),

  totalPrice: 0
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'order' })
export class OrderRowStore extends EntityStore<OrderRowState, OrderRow> {

  constructor() {
    super(initialState);
  }

}
