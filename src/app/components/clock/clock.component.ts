import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-clock',
  template: `
    <div>{{ currentTime | async | date: 'HH:mm:ss' }}</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush, 
})
export class ClockComponent {
  currentTime: Observable<Date>;

  constructor() {
    this.currentTime = interval(1000).pipe(
      startWith(0),
      map(() => new Date())
    );
  }
}
