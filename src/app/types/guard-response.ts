import { UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export type GuardResponse =
  | boolean
  | UrlTree
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>;
