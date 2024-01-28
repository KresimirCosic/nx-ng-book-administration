import { Book } from 'src/app/models/book'

export class BookState {
  constructor(
    public book: Book = new Book(),
    public bookIsLoading: boolean = false,
    public bookError: string = '',
    public books: Array<Book> = [],
    public booksAreLoading: boolean = false,
    public booksError: string = ''
  ) {}
}
