import { createAction, props } from '@ngrx/store'

import { Book } from '../../models/book'

const createActionName = (actionName: string): string => {
  const namespace = '[Books]'

  return `${namespace} ${actionName}`
}

/**
 * Book
 */
export const getBook = createAction(
  createActionName('Get Book'),
  props<{ id: number }>()
)
export const getBookSuccess = createAction(
  createActionName('Get Book Success'),
  props<{ book: Book }>()
)
export const getBookFailure = createAction(
  createActionName('Get Book Failure'),
  props<{ error: string }>()
)

/**
 * Books
 */
export const getBooks = createAction(createActionName('Get Books'))
export const getBooksSuccess = createAction(
  createActionName('Get Books Success'),
  props<{ books: Array<Book> }>()
)
export const getBooksFailure = createAction(
  createActionName('Get Books Failure'),
  props<{ error: string }>()
)
