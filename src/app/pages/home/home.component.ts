import { CommonModule } from '@angular/common'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { ButtonModule } from 'primeng/button'
import { ProgressSpinnerModule } from 'primeng/progressspinner'
import { Observable } from 'rxjs'

import { BookListComponent } from 'src/app/components/book-list/book-list.component'
import { getBooks, unselectBooks } from 'src/app/store/books/actions'
import { selectBooksAreLoading } from 'src/app/store/books/selectors'
import { AppState } from 'src/app/store/state'

@Component({
  selector: 'nx-ng-book-administration-home',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    BookListComponent,
    ProgressSpinnerModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  booksAreLoading$: Observable<boolean>

  constructor(private readonly _store: Store<AppState>) {
    this.booksAreLoading$ = this._store.select(selectBooksAreLoading)
  }

  ngOnInit(): void {
    this.getBooks()
  }

  ngOnDestroy(): void {
    this._store.dispatch(unselectBooks())
  }

  getBooks(): void {
    this._store.dispatch(getBooks())
  }
}
