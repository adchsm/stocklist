import { AggregatedStock, StockResponse } from '../models/stocklist.models';

export const mockStock: string = 'aaaa eeeeee bb c aa ccc d';

export const mockStockResponse: StockResponse = { stock: mockStock };

export const mockAggregatedStock: AggregatedStock[] = [
  {
    item: 'a',
    quantity: 6,
  },
  {
    item: 'b',
    quantity: 2,
  },
  {
    item: 'c',
    quantity: 4,
  },
  {
    item: 'd',
    quantity: 1,
  },
  {
    item: 'e',
    quantity: 6,
  },
];

export const mockStockTotal = 19;
