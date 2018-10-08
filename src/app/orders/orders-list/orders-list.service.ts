import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ORDERS_MOCK } from '../state/mock-order.model';
import { OrderListRow } from '../state/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderListService {
  getAll(): Observable<OrderListRow[]> {
    const result: OrderListRow[] = ORDERS_MOCK.map(order => {
      return { id: order.id, name: order.name };
    });
    return of(result);
  }
}
