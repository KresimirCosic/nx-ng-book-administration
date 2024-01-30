import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Observable, delay } from 'rxjs'
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
    return this._HTTPClient.post<Book>(`${this.baseURL}`, book).pipe(delay(500))
  }

  getBook(id: string): Observable<Book> {
    return this._HTTPClient.get<Book>(`${this.baseURL}/${id}`).pipe(delay(500))
  }

  updateBook(id: string, book: CreateBook): Observable<Book> {
    return this._HTTPClient
      .put<Book>(`${this.baseURL}/${id}`, book)
      .pipe(delay(500))
  }

  getBooks(): Observable<Array<Book>> {
    return this._HTTPClient.get<Array<Book>>(`${this.baseURL}`).pipe(delay(500))
  }
}
