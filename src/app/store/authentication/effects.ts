import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import {
  login,
  loginFailure,
  loginSuccess,
  logout,
  logoutFailure,
  logoutSuccess,
  register,
  registerFailure,
  registerSuccess,
} from './actions';

import { AuthenticationService } from '../../services/authentication.service';

@Injectable()
export class AuthenticationEffects {
  constructor(
    private actions$: Actions,
    private authenticationService: AuthenticationService,
  ) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      mergeMap(({ email, password, username }) =>
        this.authenticationService.register(email, password, username).pipe(
          map(() => registerSuccess()),
          catchError((error: HttpErrorResponse) => {
            return of(registerFailure({ error: error.message }));
          }),
        ),
      ),
    ),
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap(({ email, password }) =>
        this.authenticationService.login(email, password).pipe(
          map((user) => loginSuccess({ user })),
          catchError((error: HttpErrorResponse) => {
            return of(loginFailure({ error: error.message }));
          }),
        ),
      ),
    ),
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      mergeMap(() =>
        this.authenticationService.logout().pipe(
          map(() => {
            return logoutSuccess();
          }),
          catchError((error: HttpErrorResponse) => {
            return of(logoutFailure({ error: error.message }));
          }),
        ),
      ),
    ),
  );
}
