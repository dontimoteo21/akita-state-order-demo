import { ID } from '@datorama/akita';

export interface Order {
  id: ID;
  name: string;
  orderDate: Date;
}

export interface OrderRow {
  id: ID;
  orderId: ID;
  name: string;
  price: number;
}
