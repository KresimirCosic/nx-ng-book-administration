import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { Store } from '@ngrx/store'
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'

import { Observable } from 'rxjs'

import { Book } from 'src/app/models/book'
import { User } from 'src/app/models/user'
import { selectUser } from 'src/app/store/authentication/selectors'
import { selectBooks } from 'src/app/store/books/selectors'
import { AppState } from 'src/app/store/state'

@Component({
  selector: 'nx-ng-book-administration-book-list',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, RouterModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent {
  user$: Observable<User>
  books$: Observable<Array<Book>>

  constructor(private readonly _store: Store<AppState>) {
    this.user$ = this._store.select(selectUser)
    this.books$ = this._store.select(selectBooks)
  }

  imagePath(imageLink: string): string {
    return `assets/${imageLink}`
  }
}
