import { Injectable } from '@angular/core';
import { transaction } from '@datorama/akita';

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
  get(id: number) {
    this.orderRowStore.setLoading(true);
    this.orderDataService.getOrderRows(id)
      .subscribe(response => {
        this.orderRowStore.add(response);

        let sumPrice = 0;
        response.forEach(x => sumPrice += x.price);
        this.orderRowStore.updateRoot({ totalPrice: sumPrice });

        this.orderRowStore.setLoading(false);
      });
  }

}
