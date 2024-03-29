import { StocklistState } from '../../models/stocklist.models';
import { mockAggregatedStock } from '../../test/stocklist.mock';
import {
  getStock,
  getStockFailure,
  getStockSuccess,
} from '../actions/stocklist.actions';
import { stocklistReducer } from './stocklist.reducer';

describe('StocklistReducer', () => {
  const initialState: StocklistState = {
    stock: {
      data: null,
      loading: false,
      error: null,
    },
  };

  it('should handle getStock action', () => {
    const action = getStock();
    const state = stocklistReducer(initialState, action);

    expect(state).toEqual({
      stock: {
        data: null,
        loading: true,
        error: null,
      },
    });
  });

  it('should handle getStockSuccess action', () => {
    const action = getStockSuccess({ stock: [...mockAggregatedStock] });
    const state = stocklistReducer(initialState, action);

    expect(state).toEqual({
      stock: {
        data: [...mockAggregatedStock],
        loading: false,
        error: null,
      },
    });
  });

  it('should handle getStokcFailure action', () => {
    const error = 'An error occurred';
    const action = getStockFailure({ error });
    const state = stocklistReducer(initialState, action);

    expect(state).toEqual({
      stock: {
        data: null,
        loading: false,
        error,
      },
    });
  });
});
