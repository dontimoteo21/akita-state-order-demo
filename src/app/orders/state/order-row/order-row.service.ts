import { Injectable } from '@angular/core';
import { transaction, ID, decrement, increment } from '@datorama/akita';

import { OrderRowStore } from './order-row.store';
import { OrderDataService } from '../order-data-service';

@Injectable({
  providedIn: 'root'
})
export class OrderRowService {

  constructor(private orderRowStore: OrderRowStore,
    private orderDataService: OrderDataService
  ) { }

  @transaction()
  get(orderId: number) {
    this.orderRowStore.setLoading(true);
    this.orderDataService.getOrderRows(orderId)
      .subscribe(response => {
        this.orderRowStore.add(response);

        let sumPrice = 0;
        response.forEach(x => sumPrice += x.price);
        this.orderRowStore.updateRoot({ totalPrice: sumPrice });

        this.orderRowStore.setDirty();
        this.orderRowStore.setLoading(false);
      });
  }

  @transaction()
  delete(id: ID) {
    this.orderRowStore.setLoading(true);

    // TODO: this.orderDataService.deleteOrderRow(id).subscribe...
    const price = this.orderRowStore.entities[id].price;
    this.orderRowStore.updateRoot({ totalPrice: decrement(price) });
    this.orderRowStore.remove(id);

    this.orderRowStore.setLoading(false);
  }

}
