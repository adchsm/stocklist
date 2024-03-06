import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { StocklistService } from '../../services/stocklist.service';
import {
  getStock,
  getStockFailure,
  getStockSuccess,
} from '../actions/stocklist.actions';

@Injectable()
export class StocklistEffects {
  getStock$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getStock),
      exhaustMap(() =>
        this.stocklistService.getStock().pipe(
          map(({ stock }) => getStockSuccess({ stock })),
          catchError((error) => of(getStockFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private stocklistService: StocklistService
  ) {}
}
