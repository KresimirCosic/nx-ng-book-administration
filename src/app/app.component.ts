import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PrimeNGConfig } from 'primeng/api';

import { LayoutComponent } from './components/layout/layout.component';

@Component({
  standalone: true,
  imports: [ButtonModule, LayoutComponent],
  selector: 'nx-ng-book-administration-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'nx-ng-book-administration';

  constructor(private _primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this._primengConfig.ripple = true;
  }
}
