import { Order, OrderRow } from './order.model';

export const ORDERS_MOCK: Order[] = [
  {
    id: 1,
    name: 'First mock order',
    orderDate: new Date('2018-08-10'),
    orderRows: [
      {
        id: 11,
        name: 'Product A of order 1',
        price: 10
      },
      {
        id: 12,
        name: 'Product B of order 1',
        price: 22
      }
    ]
  },
  {
    id: 2,
    name: 'Second mock order',
    orderDate: new Date('2017-09-19'),
    orderRows: [
      {
        id: 21,
        name: 'Product A of order 2',
        price: 1
      },
      {
        id: 22,
        name: 'Product B of order 2',
        price: 5
      },
      {
        id: 23,
        name: 'Product C of order 2',
        price: 100.23
      }
    ]
  }
];
