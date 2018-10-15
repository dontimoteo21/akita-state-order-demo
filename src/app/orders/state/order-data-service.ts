import { Injectable } from '@angular/core';
import { Observable, of, interval } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ID } from '@datorama/akita';

import { ORDERS_MOCK, ORDER_ROWS_MOCK } from './mock-order.model';
import { Order, OrderRow } from './order.model';


const DELAY_TIME = 1000;

@Injectable({ providedIn: 'root' })
export class OrderDataService {

  private orders: Order[] = ORDERS_MOCK;
  private orderRows: OrderRow[] = ORDER_ROWS_MOCK;

  getAllOrders(): Observable<Order[]> {
    return of(this.orders)
      .pipe(delay(DELAY_TIME));
  }

  getOrderRows(orderId: number): Observable<OrderRow[]> {
    return of(this.orderRows.filter(x => x.orderId === orderId))
      .pipe(delay(DELAY_TIME));
  }

  deleteOrderRow(id: ID): Observable<any> {
    // temporary quick implementation
    this.orderRows = this.orderRows.filter(x => x.id !== id);

    return of(null)
      .pipe(delay(DELAY_TIME));
  }

}
