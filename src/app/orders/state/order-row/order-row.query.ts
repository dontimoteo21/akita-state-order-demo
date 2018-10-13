import { QueryEntity } from '@datorama/akita';
import { OrderRowState, OrderRowStore } from './order-row.store';
import { OrderRow } from '../order.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderRowQuery extends QueryEntity<OrderRowState, OrderRow> {
  constructor(protected store: OrderRowStore) {
    super(store);
  }
}
