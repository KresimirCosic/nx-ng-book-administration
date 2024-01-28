import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { APIService } from '../models/api-service'
import { Observable } from 'rxjs'
import { Book } from '../models/book'

@Injectable({
  providedIn: 'root',
})
export class BooksService extends APIService {
  constructor(private _HTTPClient: HttpClient) {
    super('books')
  }

  getBooks(): Observable<Array<Book>> {
    return this._HTTPClient.get<Array<Book>>(`${this.baseURL}`)
  }

  getBook(id: number): Observable<Book> {
    return this._HTTPClient.get<Book>(`${this.baseURL}/${id}`)
  }
}
