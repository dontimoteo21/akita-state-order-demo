import { Component, OnInit } from '@angular/core';
import { OrderListRow } from '../state/order.model';
import { OrderListService } from './orders-list.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  orders: OrderListRow[];

  constructor(private orderListService: OrderListService) { }

  ngOnInit() {
    this.orderListService.getAll()
      .subscribe(x => this.orders = x);
  }

}
