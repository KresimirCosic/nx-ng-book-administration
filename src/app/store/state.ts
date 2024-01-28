import { AuthenticationState } from './authentication/state';

export class AppState {
  constructor(
    public authentication: AuthenticationState = new AuthenticationState(),
  ) {}
}
