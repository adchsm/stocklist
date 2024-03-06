import { createSelector } from '@ngrx/store';
import { StocklistState } from '../../models/stocklist.models';

export const selectStocklist = (state: any): StocklistState => state.stocklist;

export const selectStockState = createSelector(
  selectStocklist,
  (state) => state?.stock
);

export const selectStockLoading = createSelector(
  selectStockState,
  (state) => state?.loading
);

export const selectStockData = createSelector(
  selectStockState,
  (state) => state?.data
);

export const selectStockError = createSelector(
  selectStockState,
  (state) => state?.error
);

export const selectStockTotal = createSelector(selectStockData, (stock) =>
  stock?.reduce((acc, curr) => acc + curr.quantity, 0)
);
