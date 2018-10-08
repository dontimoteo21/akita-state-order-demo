import { ID } from '@datorama/akita';

export interface Order {
  id: ID;
  name: string;
  orderDate: Date;
  orderRows: OrderRow[];
}

export interface OrderRow {
  id: ID;
  name: string;
  price: number;
}

export interface OrderListRow {
  id: ID;
  name: string;
}
