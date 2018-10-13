import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ORDERS_MOCK, ORDER_ROWS_MOCK } from './mock-order.model';
import { Order, OrderRow } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {
  getAllOrders(): Observable<Order[]> {
    return of(ORDERS_MOCK);
  }

  getOrderRows(orderId: number): Observable<OrderRow[]> {
    return of(ORDER_ROWS_MOCK.filter(x => x.orderId === orderId));
  }
}
