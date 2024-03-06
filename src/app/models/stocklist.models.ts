export interface StockResponse {
  stock: string;
}

export interface StocklistState {
  stock: DataState<AggregatedStock[]>;
}

export interface DataState<T> {
  loading: boolean;
  data: T | null;
  error: any;
}

export interface AggregatedStock {
  item: string;
  quantity: number;
}
