import { Resource } from './resource'

export class Book extends Resource {
  constructor(
    public title: string = '',
    public author: string = '',
    public year: number = 0,
    public language: string = '',
    public country: string = '',
    public pages: number = 0,
    public link: string = ''
  ) {
    super()
  }
}
