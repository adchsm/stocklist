import { createReducer, on } from '@ngrx/store';
import { StocklistState } from '../../models/stocklist.models';
import {
  getStock,
  getStockFailure,
  getStockSuccess,
} from '../actions/stocklist.actions';

export const initialState: StocklistState = {
  stock: {
    data: null,
    loading: false,
    error: null,
  },
};

export const stocklistReducer = createReducer(
  initialState,
  on(getStock, (state) => ({
    ...state,
    stock: {
      data: null,
      loading: true,
      error: null,
    },
  })),
  on(getStockSuccess, (state, { stock }) => ({
    ...state,
    stock: {
      data: stock,
      loading: false,
      error: null,
    },
  })),
  on(getStockFailure, (state, { error }) => ({
    ...state,
    stock: {
      data: null,
      loading: false,
      error,
    },
  }))
);
