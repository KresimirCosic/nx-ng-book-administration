import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../header/header.component';
import { PageComponent } from '../page/page.component';

@Component({
  selector: 'nx-ng-book-administration-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, PageComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
