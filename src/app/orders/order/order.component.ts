import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderRowService } from '../state/order-row.service';
import { OrderRowQuery } from '../state/order-row.query';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderComponent implements OnInit {

  id: number;

  constructor(
    private route: ActivatedRoute,
    private orderRowService: OrderRowService,
    private orderRowQuery: OrderRowQuery
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.orderRowService.get(this.id);
  }

}
