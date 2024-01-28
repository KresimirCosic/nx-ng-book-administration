import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  standalone: true,
  imports: [RouterModule, ButtonModule],
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
