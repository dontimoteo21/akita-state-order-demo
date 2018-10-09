import { Injectable } from '@angular/core';
import { transaction } from '@datorama/akita';

import { OrderRowStore } from './order-row.store';
import { OrderDataService } from './order-data-service';

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
    this.orderDataService.get(id)
      .subscribe(response => {
        this.orderRowStore.add(response.orderRows);

        let sumPrice = 0;
        response.orderRows.forEach(x => sumPrice += x.price);

        this.orderRowStore.updateRoot({
          orderName: response.name,
          orderDate: response.orderDate,

          totalPrice: sumPrice
        });

        this.orderRowStore.setLoading(false);
      });
  }

}
