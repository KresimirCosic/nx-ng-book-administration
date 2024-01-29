export abstract class Resource {
  constructor(
    public id: string = '',
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
    public deleted: boolean = false
  ) {}
}
