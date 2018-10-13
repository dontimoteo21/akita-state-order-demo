import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderRowService } from '../state/order-row/order-row.service';
import { OrderRowQuery } from '../state/order-row/order-row.query';
import { OrderListQuery } from '../state/order-list/order-list.query';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderDetailsComponent implements OnInit {

  id: number;

  constructor(
    private route: ActivatedRoute,
    private orderRowService: OrderRowService,
    private orderRowQuery: OrderRowQuery,
    private orderListQuery: OrderListQuery
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

}
