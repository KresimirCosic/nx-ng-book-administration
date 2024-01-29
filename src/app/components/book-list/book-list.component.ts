import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { CardModule } from 'primeng/card'

import { AppState } from 'src/app/store/state'
import { selectBooks } from 'src/app/store/books/selectors'
import { Observable } from 'rxjs'
import { Book } from 'src/app/models/book'

@Component({
  selector: 'nx-ng-book-administration-book-list',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent {
  books$: Observable<Array<Book>>

  constructor(private readonly _store: Store<AppState>) {
    this.books$ = this._store.select(selectBooks)
  }
}
