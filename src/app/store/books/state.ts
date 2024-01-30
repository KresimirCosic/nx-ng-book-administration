import { Book } from 'src/app/models/book'

export class BookState {
  constructor(
    public bookIsCreating: boolean = false,
    public bookIsCreatingError: string = '',
    public book: Book = new Book(),
    public bookIsLoading: boolean = false,
    public bookError: string = '',
    public bookIsUpdating: boolean = false,
    public bookIsUpdatingError: string = '',
    public bookIsDeleting: boolean = false,
    public bookIsDeletingError: string = '',
    public books: Array<Book> = [],
    public booksAreLoading: boolean = false,
    public booksError: string = ''
  ) {}
}
