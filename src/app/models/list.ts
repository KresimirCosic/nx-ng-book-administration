export abstract class List<T> {
  constructor(
    public data: Array<T>,
    public total: number
  ) {}
}
