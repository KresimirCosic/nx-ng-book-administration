import { Role } from '../types/role'

export class User {
  constructor(
    public id: number = 0,
    public email: string = '',
    public username: string = '',
    public role: Role = Role.USER
  ) {}
}
