import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

import { APIService } from '../models/api-service'
import { User } from '../models/user'

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends APIService {
  constructor(private HTTPClient: HttpClient) {
    super('users')
  }

  register(
    email: string,
    password: string,
    username: string
  ): Observable<void> {
    return this.HTTPClient.post<void>(`${this.baseURL}/register`, {
      email,
      password,
      username,
    })
  }

  login(email: string, password: string): Observable<User> {
    return this.HTTPClient.post<User>(`${this.baseURL}`, {
      email,
      password,
    })
    // return of<User>({ email, role: Role.ADMIN, username: 'my username' })
  }

  logout(): Observable<void> {
    // return this.HTTPClient.post<void>(`${this.baseURL}/logout`, {})
    return of(void 0)
  }
}
