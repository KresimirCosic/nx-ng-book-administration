import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { ButtonModule } from 'primeng/button'

import { logout } from 'src/app/store/authentication/actions'
import { AppState } from 'src/app/store/state'

@Component({
  selector: 'nx-ng-book-administration-home',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private readonly _store: Store<AppState>) {}

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks(): void {
    // TODO
  }

  logout(): void {
    this._store.dispatch(logout())
  }
}
