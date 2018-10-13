import { Order, OrderRow } from './order.model';

export const ORDERS_MOCK: Order[] = [
  {
    id: 1,
    name: 'First mock order',
    orderDate: new Date('2018-08-10')
  },
  {
    id: 2,
    name: 'Second mock order',
    orderDate: new Date('2017-09-19')
  }
];

export const ORDER_ROWS_MOCK: OrderRow[] = [
  {
    id: 11,
    orderId: 1,
    name: 'Product A of order 1',
    price: 10
  },
  {
    id: 12,
    orderId: 1,
    name: 'Product B of order 1',
    price: 22
  },
  {
    id: 21,
    orderId: 2,
    name: 'Product A of order 2',
    price: 1
  },
  {
    id: 22,
    orderId: 2,
    name: 'Product B of order 2',
    price: 5
  },
  {
    id: 23,
    orderId: 2,
    name: 'Product C of order 2',
    price: 100.23
  }
];
