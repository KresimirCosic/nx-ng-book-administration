import { createAction, props } from '@ngrx/store'

import { Book, CreateBook } from '../../models/book'

const createActionName = (actionName: string): string => {
  const namespace = '[Books]'

  return `${namespace} ${actionName}`
}

/**
 * Book
 */
export const createBook = createAction(
  createActionName('Create Book'),
  props<{ book: CreateBook }>()
)
export const createBookSuccess = createAction(
  createActionName('Create Book Success'),
  props<{ book: Book }>()
)
export const createBookFailure = createAction(
  createActionName('Create Book Failure'),
  props<{ error: string }>()
)
export const getBook = createAction(
  createActionName('Get Book'),
  props<{ id: string }>()
)
export const getBookSuccess = createAction(
  createActionName('Get Book Success'),
  props<{ book: Book }>()
)
export const getBookFailure = createAction(
  createActionName('Get Book Failure'),
  props<{ error: string }>()
)
export const updateBook = createAction(
  createActionName('Update Book'),
  props<{ id: string; book: CreateBook }>()
)
export const updateBookSuccess = createAction(
  createActionName('Update Book Success'),
  props<{ book: Book }>()
)
export const updateBookFailure = createAction(
  createActionName('Update Book Failure'),
  props<{ error: string }>()
)
export const deleteBook = createAction(
  createActionName('Delete Book'),
  props<{ id: string }>()
)
export const deleteBookSuccess = createAction(
  createActionName('Delete Book Success')
)
export const deleteBookFailure = createAction(
  createActionName('Delete Book Failure'),
  props<{ error: string }>()
)
export const unselectBook = createAction(createActionName('Unselect Book'))

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
export const unselectBooks = createAction(createActionName('Unselect Books'))
