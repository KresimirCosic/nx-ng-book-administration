import { inject } from '@angular/core'
import { Route } from '@angular/router'

import { AnonymousGuard } from './guards/anonymous.guard'
import { AuthenticatedGuard } from './guards/authenticated.guard'

import { AdminComponent } from './pages/admin/admin.component'
import { BookComponent } from './pages/book/book.component'
import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component'
import { RegisterComponent } from './pages/register/register.component'

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [() => inject(AnonymousGuard).canActivate()],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [() => inject(AnonymousGuard).canActivate()],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [() => inject(AuthenticatedGuard).isAdmin()],
  },
  {
    path: ':id',
    component: BookComponent,
    canActivate: [() => inject(AuthenticatedGuard).canActivate()],
  },
]
