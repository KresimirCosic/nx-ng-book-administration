import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { APIService } from './api-service'
import { List } from './list'
import { Resource } from './resource'

export abstract class ResourceService<T extends Resource> extends APIService {
  constructor(
    private HTTPClient: HttpClient,
    endpoint = ''
  ) {
    super(endpoint)
  }

  post(
    payload: Partial<Omit<T, 'id' | 'createdAt' | 'updatedAt'>>
  ): Observable<T> {
    return this.HTTPClient.post<T>(this.baseURL, payload)
  }

  get(id: number): Observable<T> {
    return this.HTTPClient.get<T>(`${this.baseURL}/${id}`)
  }

  getAll(): Observable<Array<T>> {
    return this.HTTPClient.get<Array<T>>(this.baseURL)
  }

  getList(): Observable<List<T>> {
    return this.HTTPClient.get<List<T>>(`${this.baseURL}/list`)
  }

  update(id: number, payload: T): Observable<T> {
    return this.HTTPClient.put<T>(`${this.baseURL}/${id}`, payload)
  }

  patch(
    id: number,
    payload: Partial<Omit<T, 'id' | 'createdAt' | 'updatedAt' | 'deleted'>>
  ): Observable<T> {
    return this.HTTPClient.patch<T>(`${this.baseURL}/${id}`, payload)
  }

  delete(id: number): Observable<T> {
    return this.HTTPClient.delete<T>(`${this.baseURL}/${id}`)
  }
}
