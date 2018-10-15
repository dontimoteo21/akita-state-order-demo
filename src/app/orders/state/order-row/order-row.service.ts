import { Injectable } from '@angular/core';
import { transaction, ID, decrement, increment } from '@datorama/akita';

import { OrderRow } from '../order.model';
import { OrderRowStore, INITIAL_ORDER_ROW_STATE } from './order-row.store';
import { OrderDataService } from '../order-data-service';
import { OrderRowQuery } from './order-row.query';

@Injectable({
  providedIn: 'root'
})
export class OrderRowService {

  constructor(private orderRowStore: OrderRowStore,
    private orderRowQuery: OrderRowQuery,
    private orderDataService: OrderDataService
  ) { }

  get(orderId: number) {
    this.orderRowStore.setLoading(true);
    this.orderDataService.getOrderRows(orderId)
      .subscribe(response => this.updateStore(response));
  }

  @transaction()
  updateStore(orderRows: OrderRow[]) {
    this.orderRowStore.add(orderRows);

    let sumPrice = 0;
    orderRows.forEach(x => sumPrice += x.price);
    this.orderRowStore.updateRoot({ totalPrice: sumPrice });

    this.orderRowStore.setDirty();
    this.orderRowStore.setLoading(false);
  }

  @transaction()
  delete(id: ID) {
    this.orderRowStore.setLoading(true);

    // TODO: this.orderDataService.deleteOrderRow(id).subscribe...
    const oldPrice = this.orderRowQuery.getTotalPrice(); // or `this.orderRowStore._value().totalPrice;` ?
    const removedPrice = this.orderRowStore.entities[id].price;
    this.orderRowStore.updateRoot({ totalPrice: oldPrice - removedPrice });
    this.orderRowStore.remove(id);

    this.orderRowStore.setLoading(false);
  }

  @transaction()
  clearStore() {
    this.orderRowStore.remove();
    this.orderRowStore.updateRoot(INITIAL_ORDER_ROW_STATE);
  }

}
