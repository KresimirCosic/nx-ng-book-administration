import { createSelector } from '@ngrx/store'

import { AppState } from '../state'

export const selectBookFeature = (state: AppState) => state.books

/**
 * Book
 */
export const selectBookIsCreating = createSelector(
  selectBookFeature,
  (state) => state.bookIsCreating
)
export const selectBookIsCreatingError = createSelector(
  selectBookFeature,
  (state) => state.bookIsCreatingError
)
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
export const selectBookIsUpdating = createSelector(
  selectBookFeature,
  (state) => state.bookIsUpdating
)
export const selectBookIsUpdatingError = createSelector(
  selectBookFeature,
  (state) => state.bookIsUpdatingError
)
export const selectBookIsDeleting = createSelector(
  selectBookFeature,
  (state) => state.bookIsDeleting
)
export const selectBookIsDeletingError = createSelector(
  selectBookFeature,
  (state) => state.bookIsDeletingError
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
