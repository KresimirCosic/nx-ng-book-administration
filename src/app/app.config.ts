import { HttpClientModule } from '@angular/common/http'
import { ApplicationConfig, importProvidersFrom } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { provideRouter } from '@angular/router'
import { EffectsModule, provideEffects } from '@ngrx/effects'
import { StoreModule, provideStore } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { appRoutes } from './app.routes'
import { AuthenticationEffects } from './store/authentication/effects'
import { authenticationReducer } from './store/authentication/reducer'
import { BooksEffects } from './store/books/effects'
import { booksReducer } from './store/books/reducer'

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(),
    provideStore(),
    provideRouter(appRoutes),
    importProvidersFrom(
      BrowserAnimationsModule,
      HttpClientModule,
      StoreModule.forRoot({
        authentication: authenticationReducer,
        books: booksReducer,
      }),
      EffectsModule.forRoot([AuthenticationEffects, BooksEffects]),
      StoreDevtoolsModule.instrument()
    ),
  ],
}
