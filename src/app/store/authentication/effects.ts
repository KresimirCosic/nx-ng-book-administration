import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, mergeMap, of } from 'rxjs'

import { AuthenticationService } from '../../services/authentication.service'
import {
  getUsers,
  getUsersFailure,
  getUsersSuccess,
  login,
  loginFailure,
  loginSuccess,
  logout,
  logoutFailure,
  logoutSuccess,
  register,
  registerFailure,
  registerSuccess,
} from './actions'

@Injectable()
export class AuthenticationEffects {
  constructor(
    private readonly _actions$: Actions,
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) {}

  register$ = createEffect(() =>
    this._actions$.pipe(
      ofType(register),
      mergeMap(({ email, password, username }) =>
        this._authenticationService.register(email, password, username).pipe(
          map(() => registerSuccess()),
          catchError((error: HttpErrorResponse) => {
            return of(registerFailure({ error: error.message }))
          })
        )
      )
    )
  )

  login$ = createEffect(() =>
    this._actions$.pipe(
      ofType(login),
      mergeMap(({ email, password }) =>
        this._authenticationService.login(email, password).pipe(
          map((user) => {
            this._router.navigateByUrl('/')
            return loginSuccess({ user })
          }),
          catchError((error: HttpErrorResponse) => {
            return of(loginFailure({ error: error.message }))
          })
        )
      )
    )
  )

  logout$ = createEffect(() =>
    this._actions$.pipe(
      ofType(logout),
      mergeMap(() =>
        this._authenticationService.logout().pipe(
          map(() => {
            this._router.navigateByUrl('/login')
            return logoutSuccess()
          }),
          catchError((error: HttpErrorResponse) => {
            return of(logoutFailure({ error: error.message }))
          })
        )
      )
    )
  )

  getUsers$ = createEffect(() =>
    this._actions$.pipe(
      ofType(getUsers),
      mergeMap(() =>
        this._authenticationService.getUsers().pipe(
          map((users) => getUsersSuccess({ users })),
          catchError((error: HttpErrorResponse) => {
            return of(getUsersFailure({ error: error.message }))
          })
        )
      )
    )
  )
}
