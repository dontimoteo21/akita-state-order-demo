import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ID } from '@datorama/akita';

import { OrderRowService } from '../state/order-row/order-row.service';
import { OrderRowQuery } from '../state/order-row/order-row.query';
import { OrderListQuery } from '../state/order-list/order-list.query';
import { OrderListService } from '../state/order-list/order-list.service';
import { Order, OrderRow } from '../state/order.model';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderDetailsComponent implements OnInit, OnDestroy {

  id: number;
  order$: Observable<Order>;
  orderRows$: Observable<OrderRow[]>;
  totalNumber$: Observable<number>;
  loadingList$: Observable<boolean>;
  loadingRows$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private orderRowService: OrderRowService,
    private orderRowQuery: OrderRowQuery,
    private orderListService: OrderListService,
    private orderListQuery: OrderListQuery
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.loadingList$ = this.orderListQuery.selectLoading();
    if (this.orderListQuery.isPristine) {
      this.orderListService.getAll();
    }
    this.order$ = this.orderListQuery.selectEntity(this.id);

    this.orderRowService.get(this.id);
    this.loadingRows$ = this.orderRowQuery.selectLoading();
    this.orderRows$ = this.orderRowQuery.selectAll();

    this.totalNumber$ = this.orderRowQuery.select(x => x.totalPrice);
  }

  ngOnDestroy() {
    this.orderRowQuery.clearStore();
  }

  toggleDelete(id: ID) {
    this.orderRowService.delete(id);
  }

}
