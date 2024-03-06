import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { getStock } from './store/actions/stocklist.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'stocklist';

  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.store.dispatch(getStock());
  }
}
