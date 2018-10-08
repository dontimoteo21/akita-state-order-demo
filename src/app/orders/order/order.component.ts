import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../state/order.service';
import { OrderQuery } from '../state/order.query';

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
    private orderService: OrderService,
    private orderQuery: OrderQuery
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.orderService.get(this.id);
  }

}
