import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext'
import { Observable, tap } from 'rxjs'

import { User } from 'src/app/models/user'
import { getUsers, login } from 'src/app/store/authentication/actions'
import { selectUsers } from 'src/app/store/authentication/selectors'
import { AppState } from 'src/app/store/state'

@Component({
  selector: 'nx-ng-book-administration-login',
  standalone: true,
  imports: [CommonModule, ButtonModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  users$: Observable<Array<User>>

  loginFormGroup: FormGroup

  constructor(
    private readonly _store: Store<AppState>,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {
    this.users$ = this._store.select(selectUsers)

    this.loginFormGroup = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(): void {
    this._store.dispatch(getUsers())
  }

  login(): void {
    const email = this.loginFormGroup.controls['email'].value as string
    let existingUser = new User()

    this.users$
      .pipe(
        tap((users) => {
          users.forEach((user) => {
            if (user.email === email) existingUser = user
          })
        })
      )
      .subscribe()

    const { id } = existingUser

    if (id) {
      this._store.dispatch(login({ id }))
    }
  }

  navigateHome(): void {
    this._router.navigateByUrl('/')
  }
}
