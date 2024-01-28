import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { Store } from '@ngrx/store'
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext'

import { getUsers } from 'src/app/store/authentication/actions'
import { AppState } from 'src/app/store/state'

@Component({
  selector: 'nx-ng-book-administration-login',
  standalone: true,
  imports: [CommonModule, ButtonModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup

  constructor(
    private readonly _store: Store<AppState>,
    private _formBuilder: FormBuilder
  ) {
    this.loginFormGroup = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    // TODO
    this.getUsers()
  }

  getUsers(): void {
    this._store.dispatch(getUsers())
  }

  login(): void {
    // this._store.dispatch(
    //   login({
    //     email: 'admin@domain.tld',
    //     password: 'strong_password',
    //   })
    // )
  }
}
