import { CommonModule } from '@angular/common'
import { Component, OnDestroy, OnInit } from '@angular/core'
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { ProgressSpinnerModule } from 'primeng/progressspinner'
import { Observable, tap } from 'rxjs'

import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext'
import { Book, CreateBookForm } from 'src/app/models/book'
import { getBook, unselectBook, updateBook } from 'src/app/store/books/actions'
import {
  selectBook,
  selectBookIsLoading,
  selectBookIsUpdating,
} from 'src/app/store/books/selectors'
import { AppState } from 'src/app/store/state'

@Component({
  selector: 'nx-ng-book-administration-book',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent implements OnInit, OnDestroy {
  book$: Observable<Book>
  bookIsLoading$: Observable<boolean>
  bookIsUpdating$: Observable<boolean>

  updateFormGroup: FormGroup<CreateBookForm>

  bookId: string = ''

  constructor(
    private _store: Store<AppState>,
    private _formBuilder: NonNullableFormBuilder,
    private _route: ActivatedRoute
  ) {
    this.book$ = this._store.select(selectBook)
    this.bookIsLoading$ = this._store.select(selectBookIsLoading)
    this.bookIsUpdating$ = this._store.select(selectBookIsUpdating)

    this.updateFormGroup = this._formBuilder.group({
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

  ngOnInit(): void {
    this.getBook()
  }

  ngOnDestroy(): void {
    this._store.dispatch(unselectBook())
  }

  getBook(): void {
    this.bookId = this._route.snapshot.paramMap.get('id') as string

    this.book$
      .pipe(
        tap((book) => {
          this.hydrateFormWithData(book)
        })
      )
      .subscribe()

    this._store.dispatch(getBook({ id: this.bookId }))
  }

  hydrateFormWithData(book: Book): void {
    const { title, language, year, author, country, pages } = book

    this.updateFormGroup.setValue({
      title,
      language,
      year,
      author,
      country,
      pages,
    })
  }

  updateBook(): void {
    const { title, language, year, author, country, pages } =
      this.updateFormGroup.controls

    this._store.dispatch(
      updateBook({
        id: this.bookId,
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
