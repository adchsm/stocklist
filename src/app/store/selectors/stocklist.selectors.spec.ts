import { StocklistState } from '../../models/stocklist.models';
import { mockStock } from '../../test/stocklist.mock';
import {
  selectStockData,
  selectStockError,
  selectStockLoading,
} from './stocklist.selectors';

describe('StocklistSelectors', () => {
  const state: StocklistState = {
    stock: {
      data: mockStock,
      loading: false,
      error: null,
    },
  };

  it('should select the stock loading state', () => {
    const selectedLoading = selectStockLoading.projector(state.stock);

    expect(selectedLoading).toEqual(false);
  });

  it('should select the stock data state', () => {
    const selectedData = selectStockData.projector(state.stock);

    expect(selectedData).toEqual(mockStock);
  });

  it('should select the stock error state', () => {
    const selectedError = selectStockError.projector(state.stock);

    expect(selectedError).toEqual(null);
  });
});
