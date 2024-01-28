import { createSelector } from '@ngrx/store'

import { AppState } from '../state'

export const selectBookFeature = (state: AppState) => state.books

/**
 * Book
 */
export const selectBook = createSelector(
  selectBookFeature,
  (state) => state.book
)
export const selectBookIsLoading = createSelector(
  selectBookFeature,
  (state) => state.bookIsLoading
)
export const selectBookError = createSelector(
  selectBookFeature,
  (state) => state.bookError
)

/**
 * Books
 */
export const selectBooks = createSelector(
  selectBookFeature,
  (state) => state.books
)
export const selectBooksAreLoading = createSelector(
  selectBookFeature,
  (state) => state.booksAreLoading
)
export const selectBooksError = createSelector(
  selectBookFeature,
  (state) => state.booksError
)
