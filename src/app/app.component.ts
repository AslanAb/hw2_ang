import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { countSelector, decrease, increase } from './reducers/counter';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  count = this.store.select(countSelector);
  cannotDecrease = this.count.pipe(map((item) => item <= 0));

  constructor(private store: Store) {}

  increase(): void {
    this.store.dispatch(increase());
  }

  decrease(): void {
    this.store.dispatch(decrease());
  }
}
