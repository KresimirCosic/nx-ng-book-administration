import { isDevMode } from '@angular/core';

export abstract class APIService {
  protected protocol: 'http' | 'https' = isDevMode() ? 'http' : 'https';
  protected domain = 'localhost';
  protected port = 9229;
  protected baseURL: string;

  constructor(endpoint: string = '') {
    this.baseURL = `${this.protocol}://${this.domain}:${this.port}/api/${endpoint}`;
  }
}
