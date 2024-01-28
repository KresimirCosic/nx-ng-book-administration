export abstract class Resource {
  constructor(
    public id: number = 0,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
    public deleted: boolean = false,
  ) {}
}
