import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { ButtonModule } from 'primeng/button'

import { login } from 'src/app/store/authentication/actions'
import { AppState } from 'src/app/store/state'

@Component({
  selector: 'nx-ng-book-administration-login',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private readonly _store: Store<AppState>) {}

  login() {
    this._store.dispatch(
      login({
        email: 'my@email.tld',
        password: 'password',
      })
    )
  }
}
