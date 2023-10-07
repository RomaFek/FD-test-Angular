import {CanActivate} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor() {
  }

  public canActivate(): boolean {
    return Boolean(sessionStorage.getItem('authenticated'))
  }
}
