import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';
import { APIService } from '../models/api-service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends APIService {
  constructor(private HTTPClient: HttpClient) {
    super('authentication');
  }

  register(
    email: string,
    password: string,
    username: string,
  ): Observable<void> {
    return this.HTTPClient.post<void>(`${this.baseURL}/register`, {
      email,
      password,
      username,
    });
  }

  login(email: string, password: string): Observable<User> {
    return this.HTTPClient.post<User>(`${this.baseURL}/login`, {
      email,
      password,
    });
  }

  logout(): Observable<void> {
    return this.HTTPClient.post<void>(`${this.baseURL}/logout`, {});
  }
}
