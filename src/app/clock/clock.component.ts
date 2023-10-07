import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {interval, Observable, startWith} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClockComponent {
  @Input()
  public currentTime$: Observable<Date>;

  constructor() {
    this.currentTime$ = interval(1000).pipe(
      startWith(0),//если убрать то часы появятся через одну секунду
      map(() => new Date())
    );
  }
}
