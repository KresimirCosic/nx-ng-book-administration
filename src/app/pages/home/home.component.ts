import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { ButtonModule } from 'primeng/button'

import { getBooks } from 'src/app/store/books/actions'
import { AppState } from 'src/app/store/state'
import { BookListComponent } from 'src/app/components/book-list/book-list.component'

@Component({
  selector: 'nx-ng-book-administration-home',
  standalone: true,
  imports: [CommonModule, ButtonModule, BookListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private readonly _store: Store<AppState>) {}

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks(): void {
    this._store.dispatch(getBooks())
  }
}
