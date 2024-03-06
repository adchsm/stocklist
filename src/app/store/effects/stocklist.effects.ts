import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { AggregatedStock } from '../../models/stocklist.models';
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
          map(({ stock }) =>
            getStockSuccess({ stock: this.aggregateStock(stock) })
          ),
          catchError((error) => of(getStockFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private stocklistService: StocklistService
  ) {}

  private aggregateStock(stock: string): AggregatedStock[] {
    // NOTE: Not sure if we need to preserve the chunks split by a ' ' from the response, but didn't seem to need to to answer the problem
    return stock
      .replace(/ /g, '')
      .split('')
      .reduce((acc: AggregatedStock[], curr: string) => {
        const ref = acc.find((s) => s.item === curr);

        if (ref) {
          ref.quantity++;
        } else {
          acc.push({ item: curr, quantity: 1 });
        }

        return acc;
      }, [])
      .sort((a, b) => a.item.localeCompare(b.item));
  }
}

// const chunks = (stock ?? '').split(' ');

// const stocks: AggregatedStock[] = chunks.reduce(
//   (acc: AggregatedStock[], curr: string) => {
//     const units = curr.split('');

//     units.forEach((u) => {
//       const ref = acc.find((s) => s.item === u);

//       if (ref) {
//         ref.quantity++;
//       } else {
//         acc.push({ item: u, quantity: 1 });
//       }
//     });

//     return acc;
//   },
//   []
// );

// return stocks.sort((a, b) => a.item.localeCompare(b.item));
