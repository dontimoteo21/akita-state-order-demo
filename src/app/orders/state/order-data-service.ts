import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ORDERS_MOCK, ORDER_ROWS_MOCK } from './mock-order.model';
import { Order, OrderRow } from './order.model';

const DELAY_TIME = 1000;

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {
  getAllOrders(): Observable<Order[]> {
    return of(ORDERS_MOCK)
      .pipe(delay(DELAY_TIME));
  }

  getOrderRows(orderId: number): Observable<OrderRow[]> {
    return of(ORDER_ROWS_MOCK.filter(x => x.orderId === orderId))
      .pipe(delay(DELAY_TIME));
  }
}
