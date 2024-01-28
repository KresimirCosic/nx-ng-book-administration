import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { PageComponent } from '../page/page.component';

@Component({
  selector: 'nx-ng-book-administration-layout',
  standalone: true,
  imports: [RouterModule, CommonModule, HeaderComponent, PageComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
