import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'
import { APIService } from '../models/api-service'
import { Book, CreateBook } from '../models/book'

@Injectable({
  providedIn: 'root',
})
export class BooksService extends APIService {
  constructor(private _HTTPClient: HttpClient) {
    super('books')
  }

  createBook(book: CreateBook): Observable<Book> {
    return this._HTTPClient.post<Book>(`${this.baseURL}`, book)
  }

  getBook(id: string): Observable<Book> {
    return this._HTTPClient.get<Book>(`${this.baseURL}/${id}`)
  }

  getBooks(): Observable<Array<Book>> {
    return this._HTTPClient.get<Array<Book>>(`${this.baseURL}`)
  }
}
