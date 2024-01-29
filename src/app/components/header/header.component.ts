import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { Store } from '@ngrx/store'
import { ButtonModule } from 'primeng/button'
import { Observable, tap } from 'rxjs'

import { User } from 'src/app/models/user'
import { logout } from 'src/app/store/authentication/actions'
import { selectUser } from 'src/app/store/authentication/selectors'
import { AppState } from 'src/app/store/state'
import { Role } from 'src/app/types/role'

@Component({
  selector: 'nx-ng-book-administration-header',
  standalone: true,
  imports: [CommonModule, ButtonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  user$: Observable<User>

  constructor(private readonly _store: Store<AppState>) {
    this.user$ = this._store.select(selectUser)
  }

  logout(): void {
    this._store.dispatch(logout())
  }

  get isAdmin(): boolean {
    let value = false

    this.user$
      .pipe(
        tap((user) => {
          if (user.role === Role.ADMIN) value = true
        })
      )
      .subscribe()
      .unsubscribe()

    return value
  }
}
