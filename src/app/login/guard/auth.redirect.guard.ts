import {CanActivate, Router, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthGuard} from "./auth.guard";

@Injectable({
  providedIn: 'root',
})
export class AuthRedirectGuard implements CanActivate {
  constructor(private router: Router, private authenticated: AuthGuard) {
  }

  public canActivate(): boolean | UrlTree {
    if (!this.authenticated.canActivate()) {
      return this.router.createUrlTree(['/login']);
    }
    return true;
  }
}
