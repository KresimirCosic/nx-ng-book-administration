import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

import { APIService } from '../models/api-service'
import { User } from '../models/user'

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends APIService {
  constructor(private _HTTPClient: HttpClient) {
    super('users')
  }

  register(
    email: string,
    password: string,
    username: string
  ): Observable<void> {
    return this._HTTPClient.post<void>(`${this.baseURL}`, {
      email,
      password,
      username,
    })
  }

  login(id: string): Observable<User> {
    return this._HTTPClient.get<User>(`${this.baseURL}/${id}`)
  }

  logout(): Observable<void> {
    return of(void 0)
  }

  getUsers(): Observable<Array<User>> {
    return this._HTTPClient.get<Array<User>>(`${this.baseURL}`)
  }
}
