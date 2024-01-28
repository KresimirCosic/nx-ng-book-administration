import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Store, select } from '@ngrx/store'
import { map } from 'rxjs'

import { selectUser } from '../store/authentication/selectors'
import { AppState } from '../store/state'
import { GuardResponse } from '../types/guard-response'

@Injectable({
  providedIn: 'root',
})
export class AnonymousGuard {
  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {}

  canActivate(): GuardResponse {
    return this.store.pipe(
      select(selectUser),
      map((user) => {
        if (!user.email) {
          return true
        }

        return this.router.createUrlTree(['/'])
      })
    )
  }
}
