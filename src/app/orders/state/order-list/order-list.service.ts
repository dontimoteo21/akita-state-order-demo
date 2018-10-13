import { Injectable } from '@angular/core';
import { transaction } from '@datorama/akita';
import { OrderListStore } from './order-list.store';
import { OrderDataService } from '../order-data-service';

@Injectable({ providedIn: 'root' })
export class OrderListService {

  constructor(private orderListStore: OrderListStore,
    private orderDataService: OrderDataService
  ) { }

  @transaction()
  getAll() {
    this.orderListStore.setLoading(true);
    this.orderDataService.getAllOrders()
      .subscribe(response => {
        this.orderListStore.add(response);
        this.orderListStore.setLoading(false);
      });
  }
}
