import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { Book } from 'src/app/models/book'
import { BooksService } from 'src/app/services/books.service'
import { getBook } from 'src/app/store/books/actions'
import { selectBook } from 'src/app/store/books/selectors'
import { AppState } from 'src/app/store/state'

@Component({
  selector: 'nx-ng-book-administration-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  book$: Observable<Book>

  updateFormGroup: FormGroup

  bookId: string = ''

  constructor(
    private _store: Store<AppState>,
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _bookService: BooksService
  ) {
    this.book$ = this._store.select(selectBook)

    this.updateFormGroup = this._formBuilder.group({
      // TODO
    })
  }

  ngOnInit(): void {
    this.getBook()
  }

  getBook(): void {
    this.bookId = this._route.snapshot.paramMap.get('id') as string

    this._store.dispatch(getBook({ id: this.bookId }))
  }
}
