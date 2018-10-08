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
  get() {
    this.orderStore.setLoading(true);
    this.orderDataService.get()
      .subscribe(response => {
        this.orderStore.add(response);
        this.orderStore.setLoading(false);
      });
  }

}
