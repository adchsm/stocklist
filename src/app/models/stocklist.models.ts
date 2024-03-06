export interface StockResponse {
  stock: string;
}

export interface StocklistState {
  stock: DataState<string>;
}

export interface DataState<T> {
  loading: boolean;
  data: T | null;
  error: any;
}
