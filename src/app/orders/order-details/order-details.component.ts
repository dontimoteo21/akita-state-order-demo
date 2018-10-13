import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderRowService } from '../state/order-row/order-row.service';
import { OrderRowQuery } from '../state/order-row/order-row.query';
import { OrderListQuery } from '../state/order-list/order-list.query';
import { OrderListService } from '../state/order-list/order-list.service';
import { Observable } from 'rxjs';
import { Order } from '../state/order.model';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderDetailsComponent implements OnInit {

  id: number;
  order$: Observable<Order>;
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

    this.orderRowService.get(this.id);
    this.loadingRows$ = this.orderRowQuery.selectLoading();

    this.order$ = this.orderListQuery.selectEntity(this.id);
  }

}
