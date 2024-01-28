import { Role } from '../types/role'

export class User {
  constructor(
    public email: string = '',
    public username: string = '',
    public role: Role = Role.USER
  ) {}
}
