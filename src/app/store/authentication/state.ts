import { User } from 'src/app/models/user'

export class AuthenticationState {
  constructor(
    public registerIsLoading: boolean = false,
    public registerError: string = '',
    public loginIsLoading: boolean = false,
    public loginError: string = '',
    public logoutIsLoading: boolean = false,
    public logoutError: string = '',
    public user: User = new User()
  ) {}
}
