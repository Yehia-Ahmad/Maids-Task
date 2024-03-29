import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private _loading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this._loading.asObservable().pipe(delay(1));

  constructor() { }

  show() {
    this._loading.next(true);
  }

  hide() {
    setTimeout(() => {
      this._loading.next(false);
    }, 1000);
  }
}
