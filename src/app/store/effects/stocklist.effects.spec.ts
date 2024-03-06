import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store, StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of, throwError } from 'rxjs';
import { StocklistService } from '../../services/stocklist.service';
import { mockStock, mockStockResponse } from '../../test/stocklist.mock';
import {
  getStock,
  getStockFailure,
  getStockSuccess,
} from '../actions/stocklist.actions';
import { StocklistEffects } from './stocklist.effects';

describe('StocklistEffects', () => {
  let actions$: Observable<any>;
  let effects: StocklistEffects;
  let store: Store;
  let stocklistService: StocklistService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), HttpClientTestingModule],
      providers: [
        StocklistEffects,
        provideMockActions(() => actions$),
        provideMockStore(),
        HttpClient,
        StocklistService,
      ],
    });

    effects = TestBed.inject(StocklistEffects);
    store = TestBed.inject(Store);
    stocklistService = TestBed.inject(StocklistService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('getStock$', () => {
    it('should dispatch a getStockSuccess action after a successful api call', () => {
      spyOn(stocklistService, 'getStock').and.returnValue(
        of({ ...mockStockResponse })
      );

      actions$ = hot('-a---', { a: getStock() });

      const expected = cold('-a---', {
        a: getStockSuccess({ stock: mockStock }),
      });

      expect(effects.getStock$).toBeObservable(expected);
    });

    it('should dispatch a getStockFailure action after a failed api call', () => {
      spyOn(stocklistService, 'getStock').and.returnValue(
        throwError(() => new Error(''))
      );

      actions$ = hot('-a---', { a: getStock() });

      const expected = cold('-a---', {
        a: getStockFailure({ error: new Error('') }),
      });

      expect(effects.getStock$).toBeObservable(expected);
    });
  });
});
