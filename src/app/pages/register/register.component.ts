import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext'
import { register } from 'src/app/store/authentication/actions'

import { AppState } from 'src/app/store/state'

type RegisterForm = {
  email: FormControl<string>
  username: FormControl<string>
  password: FormControl<string>
}

@Component({
  selector: 'nx-ng-book-administration-register',
  standalone: true,
  imports: [CommonModule, ButtonModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerFormGroup: FormGroup<RegisterForm>

  constructor(
    private readonly _store: Store<AppState>,
    private _formBuilder: NonNullableFormBuilder,
    private _router: Router
  ) {
    this.registerFormGroup = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    })
  }

  register(): void {
    const { email, password, username } = this.registerFormGroup.controls

    this._store.dispatch(
      register({
        email: email.value,
        password: password.value,
        username: username.value,
      })
    )
  }

  navigateLogin(): void {
    this._router.navigateByUrl('/login')
  }
}
