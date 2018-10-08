import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ORDERS_MOCK } from './mock-order.model';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {
  get(id: number): Observable<Order> {
    const result = ORDERS_MOCK.find(x => x.id === id);
    return of(result);
  }
}
