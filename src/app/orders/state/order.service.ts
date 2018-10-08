import { Injectable } from '@angular/core';
import { transaction } from '@datorama/akita';

import { OrderStore } from './order.store';
import { OrderDataService } from './order-data-service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private orderStore: OrderStore,
    private orderDataService: OrderDataService
  ) { }

  @transaction()
  get(id: number) {
    this.orderStore.setLoading(true);
    this.orderDataService.get(id)
      .subscribe(response => {
        this.orderStore.add(response);

        let sumPrice = 0;
        response.orderRows.forEach(x => sumPrice += x.price);

        this.orderStore.updateRoot({ totalPrice: sumPrice });
        this.orderStore.setLoading(false);
      });
  }

}
