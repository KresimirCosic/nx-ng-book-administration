import { Role } from '../types/role'
import { Resource } from './resource'

export class User extends Resource {
  constructor(
    public email: string = '',
    public username: string = '',
    public role: Role = Role.USER
  ) {
    super()
  }
}
