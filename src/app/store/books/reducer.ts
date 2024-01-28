import { createReducer, on } from '@ngrx/store'
import { cloneDeep } from 'lodash-es'

import {
  getBook,
  getBookFailure,
  getBookSuccess,
  getBooks,
  getBooksFailure,
  getBooksSuccess,
} from './actions'
import { BookState } from './state'

export const initialState: BookState = new BookState()

export const booksReducer = createReducer(
  initialState,
  /**
   * Book
   */
  on(getBook, (state) => {
    const clonedState = cloneDeep(state)
    return { ...clonedState, bookIsLoading: true }
  }),
  on(getBookSuccess, (state, { book }) => {
    const clonedState = cloneDeep(state)
    return { ...clonedState, bookIsLoading: false, book }
  }),
  on(getBookFailure, (state, { error }) => {
    const clonedState = cloneDeep(state)
    return { ...clonedState, bookIsLoading: false, bookError: error }
  }),
  /**
   * Books
   */
  on(getBooks, (state) => {
    const clonedState = cloneDeep(state)
    return { ...clonedState, booksAreLoading: true }
  }),
  on(getBooksSuccess, (state, { books }) => {
    const clonedState = cloneDeep(state)
    return { ...clonedState, booksAreLoading: false, books }
  }),
  on(getBooksFailure, (state, { error }) => {
    const clonedState = cloneDeep(state)
    return { ...clonedState, booksAreLoading: false, booksError: error }
  })
)
