import { AuthenticationState } from './authentication/state'
import { BookState } from './books/state'

export class AppState {
  constructor(
    public authentication: AuthenticationState = new AuthenticationState(),
    public books: BookState = new BookState()
  ) {}
}
