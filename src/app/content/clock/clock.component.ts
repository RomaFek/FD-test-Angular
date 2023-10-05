import {ChangeDetectionStrategy, Component} from '@angular/core';
import {interval, Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClockComponent {
  public currentTime$: Observable<Date>;

  constructor() {
    this.currentTime$ = interval(1000).pipe(
      startWith(0),
      map(() => new Date())
    );
  }
}
