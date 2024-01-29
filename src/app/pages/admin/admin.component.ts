import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { Store } from '@ngrx/store'
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext'
import { Observable } from 'rxjs'

import { Book } from 'src/app/models/book'
import { selectBooks } from 'src/app/store/books/selectors'
import { AppState } from 'src/app/store/state'

@Component({
  selector: 'nx-ng-book-administration-admin',
  standalone: true,
  imports: [CommonModule, InputTextModule, ReactiveFormsModule, ButtonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  books$: Observable<Array<Book>>

  createBookFormGroup: FormGroup

  constructor(
    private readonly _store: Store<AppState>,
    private _formBuilder: FormBuilder
  ) {
    this.books$ = this._store.select(selectBooks)

    this.createBookFormGroup = this._formBuilder.group({
      title: ['', Validators.required],
      language: ['', Validators.required],
      year: [
        1,
        [
          Validators.required,
          Validators.min(1),
          Validators.max(new Date().getFullYear()),
        ],
      ],
      author: ['', Validators.required],
      country: ['', Validators.required],
      pages: [
        1,
        [
          Validators.required,
          Validators.min(1),
          Validators.max(new Date().getFullYear()),
        ],
      ],
    })
  }

  createBook(): void {
    // TODO
  }
}
