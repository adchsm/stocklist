import { StocklistState } from '../../models/stocklist.models';
import { mockAggregatedStock, mockStockTotal } from '../../test/stocklist.mock';
import {
  selectStockData,
  selectStockError,
  selectStockLoading,
  selectStockTotal,
} from './stocklist.selectors';

describe('StocklistSelectors', () => {
  const state: StocklistState = {
    stock: {
      data: [...mockAggregatedStock],
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

    expect(selectedData).toEqual([...mockAggregatedStock]);
  });

  it('should select the stock error state', () => {
    const selectedError = selectStockError.projector(state.stock);

    expect(selectedError).toEqual(null);
  });

  it('should select the stock total state', () => {
    const selectedTotal = selectStockTotal.projector(state.stock.data);

    expect(selectedTotal).toEqual(mockStockTotal);
  });
});
