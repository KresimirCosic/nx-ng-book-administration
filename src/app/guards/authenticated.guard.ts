import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, map } from 'rxjs';

import { selectUser } from '../store/authentication/selectors';
import { AppState } from '../store/state';
import { Role } from '../types/role';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedGuard {
  constructor(
    private readonly _store: Store<AppState>,
    private _router: Router
  ) {}

  canActivate():
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this._store.pipe(
      select(selectUser),
      map((user) => {
        if (user.email) {
          return true;
        }

        return this._router.createUrlTree(['login']);
      })
    );
  }

  isAdmin():
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this._store.pipe(
      select(selectUser),
      map((user) => {
        if (!user.email) {
          return this._router.createUrlTree(['login']);
        }

        if (user.role === Role.ADMIN) {
          return true;
        }

        return this._router.createUrlTree(['/']);
      })
    );
  }

  isUser():
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this._store.pipe(
      select(selectUser),
      map((user) => {
        if (!user.email) {
          return this._router.createUrlTree(['login']);
        }

        if (user.role === Role.USER) {
          return true;
        }

        return this._router.createUrlTree(['/admin']);
      })
    );
  }
}
