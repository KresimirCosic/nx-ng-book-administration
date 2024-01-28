import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { ButtonModule } from 'primeng/button'
import { Observable } from 'rxjs'

import { User } from 'src/app/models/user'
import { logout } from 'src/app/store/authentication/actions'
import { selectUser } from 'src/app/store/authentication/selectors'
import { AppState } from 'src/app/store/state'

@Component({
  selector: 'nx-ng-book-administration-home',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  user$: Observable<User>

  constructor(private readonly _store: Store<AppState>) {
    this.user$ = this._store.select(selectUser)
  }

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks(): void {}

  logout(): void {
    this._store.dispatch(logout())
  }
}
