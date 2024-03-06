import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { StocklistEffects } from './store/effects/stocklist.effects';
import { stocklistReducer } from './store/reducer/stocklist.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ stocklist: stocklistReducer }),
    provideEffects([StocklistEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: isDevMode() }),
    provideHttpClient(),
  ],
};
