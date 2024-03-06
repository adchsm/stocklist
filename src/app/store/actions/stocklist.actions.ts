import { createAction, props } from '@ngrx/store';
import { STOCKLIST_CONSTANTS } from '../../constants/stocklist.constants';
import { AggregatedStock } from '../../models/stocklist.models';

export const getStock = createAction(
  `[${STOCKLIST_CONSTANTS.STORE_KEY}] get stock`
);

export const getStockSuccess = createAction(
  `[${STOCKLIST_CONSTANTS.STORE_KEY}] get stock success`,
  props<{ stock: AggregatedStock[] }>()
);

export const getStockFailure = createAction(
  `[${STOCKLIST_CONSTANTS.STORE_KEY}] get stock failure`,
  props<{ error: any }>()
);
