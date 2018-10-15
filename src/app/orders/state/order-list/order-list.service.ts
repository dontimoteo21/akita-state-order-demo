import { Injectable } from '@angular/core';
import { transaction } from '@datorama/akita';

import { Order } from '../order.model';
import { OrderListStore } from './order-list.store';
import { OrderDataService } from '../order-data-service';

@Injectable({ providedIn: 'root' })
export class OrderListService {

  constructor(private orderListStore: OrderListStore,
    private orderDataService: OrderDataService
  ) { }

  getAll() {
    this.orderListStore.setLoading(true);
    this.orderDataService.getAllOrders()
      .subscribe(response => this.updateStore(response));
  }

  @transaction()
  updateStore(orders: Order[]) {
    this.orderListStore.add(orders);
    this.orderListStore.setDirty();
    this.orderListStore.setLoading(false);
  }
}
