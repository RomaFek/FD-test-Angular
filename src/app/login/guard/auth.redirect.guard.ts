import {CanActivate, Router, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthRedirectGuard implements CanActivate {
    constructor(private router: Router) {
    }

    public canActivate(): boolean | UrlTree {
        if (!sessionStorage.getItem('authenticated')) {
            return this.router.createUrlTree(['/login']);
        }
        return true;
    }
}
