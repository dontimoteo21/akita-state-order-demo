import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ID } from '@datorama/akita';

import { OrderRow } from '../state/order.model';

@Component({
  selector: 'app-order-rows',
  templateUrl: './order-rows.component.html',
  styleUrls: ['./order-rows.component.css']
})
export class OrderRowsComponent {

  @Input() rows: OrderRow[];
  @Input() loading: boolean;
  @Output() toggleDel = new EventEmitter<ID>();

  constructor() { }

  toggleDelete(id: ID) {
    this.toggleDel.next(id);
  }

}
