import { STOCKLIST_CONSTANTS } from '../../constants/stocklist.constants';
import { mockStock } from '../../test/stocklist.mock';
import {
  getStock,
  getStockFailure,
  getStockSuccess,
} from './stocklist.actions';

describe('StocklistActions', () => {
  it('should create the getStock action', () => {
    const action = getStock();

    expect({ ...action }).toEqual({
      type: `[${STOCKLIST_CONSTANTS.STORE_KEY}] get stock`,
    });
  });

  it('should create the getStockSuccess action', () => {
    const action = getStockSuccess({
      stock: mockStock,
    });

    expect({ ...action }).toEqual({
      type: `[${STOCKLIST_CONSTANTS.STORE_KEY}] get stock success`,
      stock: mockStock,
    });
  });

  it('should create the getStockFailure action', () => {
    const error = 'An error occurred';
    const action = getStockFailure({ error });

    expect({ ...action }).toEqual({
      type: `[${STOCKLIST_CONSTANTS.STORE_KEY}] get stock failure`,
      error,
    });
  });
});
