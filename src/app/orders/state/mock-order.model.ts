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
        quantity: 2,
        unitPrice: 10
      },
      {
        id: 12,
        name: 'Product B of order 1',
        quantity: 3,
        unitPrice: 22
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
        quantity: 3,
        unitPrice: 1
      },
      {
        id: 22,
        name: 'Product B of order 2',
        quantity: 5,
        unitPrice: 5
      },
      {
        id: 23,
        name: 'Product C of order 2',
        quantity: 100,
        unitPrice: 0.01
      }
    ]
  }
];
