import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { Store } from '@ngrx/store'
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext'
import { Observable } from 'rxjs'

import { Book, CreateBookForm } from 'src/app/models/book'
import { createBook } from 'src/app/store/books/actions'
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

  createBookFormGroup: FormGroup<CreateBookForm>

  constructor(
    private readonly _store: Store<AppState>,
    private _formBuilder: NonNullableFormBuilder
  ) {
    this.books$ = this._store.select(selectBooks)

    this.createBookFormGroup = this._formBuilder.group({
      title: ['', Validators.required],
      language: ['', Validators.required],
      year: [
        1,
        [Validators.required, Validators.max(new Date().getFullYear())],
      ],
      author: ['', Validators.required],
      country: ['', Validators.required],
      pages: [1, [Validators.required, Validators.min(1)]],
    })
  }

  createBook(): void {
    const { title, language, year, author, country, pages } =
      this.createBookFormGroup.controls

    this._store.dispatch(
      createBook({
        book: {
          title: title.value,
          language: language.value,
          year: year.value,
          author: author.value,
          country: country.value,
          pages: pages.value,
        },
      })
    )
  }
}
