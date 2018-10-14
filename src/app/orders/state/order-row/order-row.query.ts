import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';

import { OrderRowState, OrderRowStore, INITIAL_ORDER_ROW_STATE } from './order-row.store';
import { OrderRow } from '../order.model';

@Injectable({ providedIn: 'root' })
export class OrderRowQuery extends QueryEntity<OrderRowState, OrderRow> {
  constructor(protected store: OrderRowStore) {
    super(store);
  }

  clearStore() {
    this.store.remove();
    this.store.updateRoot(INITIAL_ORDER_ROW_STATE);
  }
}
