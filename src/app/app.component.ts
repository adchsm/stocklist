import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getStock } from './store/actions/stocklist.actions';
import {
  selectStockData,
  selectStockTotal,
} from './store/selectors/stocklist.selectors';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  protected stock = toSignal(this.store.select(selectStockData));
  protected stockTotal$: Observable<number | undefined> =
    this.store.select(selectStockTotal);

  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.store.dispatch(getStock());
  }
}
