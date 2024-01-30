import { Component, OnInit } from '@angular/core'
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api'
import { ButtonModule } from 'primeng/button'
import { ConfirmDialogModule } from 'primeng/confirmdialog'
import { ToastModule } from 'primeng/toast'

import { LayoutComponent } from './components/layout/layout.component'

@Component({
  standalone: true,
  imports: [ButtonModule, LayoutComponent, ToastModule, ConfirmDialogModule],
  selector: 'nx-ng-book-administration-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessageService, ConfirmationService],
})
export class AppComponent implements OnInit {
  title = 'nx-ng-book-administration'

  constructor(private _primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this._primengConfig.ripple = true
  }
}
