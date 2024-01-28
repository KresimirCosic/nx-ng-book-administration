import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, mergeMap, of } from 'rxjs'

import { BooksService } from 'src/app/services/books.service'
import {
  getBook,
  getBooksSuccess,
  getBookFailure,
  getBooks,
  getBookSuccess,
  getBooksFailure,
} from './actions'

@Injectable()
export class BooksEffects {
  constructor(
    private readonly _actions$: Actions,
    private _booksService: BooksService,
    private _router: Router
  ) {}

  book$ = createEffect(() =>
    this._actions$.pipe(
      ofType(getBook),
      mergeMap(({ id }) =>
        this._booksService.getBook(id).pipe(
          map((book) => {
            return getBookSuccess({ book })
          }),
          catchError((error: HttpErrorResponse) => {
            return of(getBookFailure({ error: error.message }))
          })
        )
      )
    )
  )

  books$ = createEffect(() =>
    this._actions$.pipe(
      ofType(getBooks),
      mergeMap(() =>
        this._booksService.getBooks().pipe(
          map((books) => {
            return getBooksSuccess({ books })
          }),
          catchError((error: HttpErrorResponse) => {
            return of(getBooksFailure({ error: error.message }))
          })
        )
      )
    )
  )
}
