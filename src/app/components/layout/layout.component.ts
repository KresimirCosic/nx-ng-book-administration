import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { User } from 'src/app/models/user'
import { selectUser } from 'src/app/store/authentication/selectors'
import { AppState } from 'src/app/store/state'
import { HeaderComponent } from '../header/header.component'
import { PageComponent } from '../page/page.component'

@Component({
  selector: 'nx-ng-book-administration-layout',
  standalone: true,
  imports: [RouterModule, CommonModule, PageComponent, HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  user$: Observable<User>

  constructor(private readonly _store: Store<AppState>) {
    this.user$ = this._store.select(selectUser)
  }
}
