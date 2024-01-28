import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, map } from 'rxjs';

import { selectUser } from '../store/authentication/selectors';
import { AppState } from '../store/state';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedGuard {
  constructor(private store: Store<AppState>, private router: Router) {}
  canActivate():
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.store.pipe(
      select(selectUser),
      map((user) => {
        if (user.email) {
          return true;
        }

        return this.router.createUrlTree(['/authentication/login']);
      })
    );
  }
}
