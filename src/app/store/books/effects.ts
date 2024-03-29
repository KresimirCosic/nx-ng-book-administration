import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, mergeMap, of } from 'rxjs'

import { BooksService } from 'src/app/services/books.service'
import {
  createBook,
  createBookSuccess,
  deleteBook,
  deleteBookSuccess,
  getBook,
  getBookFailure,
  getBookSuccess,
  getBooks,
  getBooksFailure,
  getBooksSuccess,
  updateBook,
  updateBookSuccess,
} from './actions'

@Injectable()
export class BooksEffects {
  constructor(
    private readonly _actions$: Actions,
    private _booksService: BooksService,
    private _router: Router
  ) {}

  createBook$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(createBook),
      mergeMap(({ book }) => {
        return this._booksService.createBook(book).pipe(
          map((book) => {
            this._router.navigateByUrl('/')
            return createBookSuccess({ book })
          }),
          catchError((error: HttpErrorResponse) => {
            return of(getBookFailure({ error: error.message }))
          })
        )
      })
    )
  })

  getBook$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(getBook),
      mergeMap(({ id }) => {
        return this._booksService.getBook(id).pipe(
          map((book) => {
            return getBookSuccess({ book })
          }),
          catchError((error: HttpErrorResponse) => {
            return of(getBookFailure({ error: error.message }))
          })
        )
      })
    )
  })

  updateBook$ = createEffect(() =>
    this._actions$.pipe(
      ofType(updateBook),
      mergeMap(({ id, book }) => {
        return this._booksService.updateBook(id, book).pipe(
          map((book) => {
            return updateBookSuccess({ book })
          }),
          catchError((error: HttpErrorResponse) => {
            return of(getBookFailure({ error: error.message }))
          })
        )
      })
    )
  )

  deleteBook$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(deleteBook),
      mergeMap(({ id }) => {
        return this._booksService.deleteBook(id).pipe(
          map(() => {
            this._router.navigateByUrl('/')

            console.log(id)
            return deleteBookSuccess()
          }),
          catchError((error: HttpErrorResponse) => {
            return of(getBookFailure({ error: error.message }))
          })
        )
      })
    )
  })

  getBooks$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(getBooks),
      mergeMap(() => {
        return this._booksService.getBooks().pipe(
          map((books) => {
            return getBooksSuccess({ books })
          }),
          catchError((error: HttpErrorResponse) => {
            return of(getBooksFailure({ error: error.message }))
          })
        )
      })
    )
  })
}
