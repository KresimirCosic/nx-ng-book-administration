import { HttpClientModule } from '@angular/common/http'
import { ApplicationConfig, importProvidersFrom } from '@angular/core'
import { provideRouter } from '@angular/router'
import { EffectsModule, provideEffects } from '@ngrx/effects'
import { StoreModule, provideStore } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { appRoutes } from './app.routes'
import { AuthenticationEffects } from './store/authentication/effects'
import { authenticationReducer } from './store/authentication/reducer'

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(),
    provideStore(),
    provideRouter(appRoutes),
    importProvidersFrom(
      HttpClientModule,
      StoreModule.forRoot({
        authentication: authenticationReducer,
      }),
      EffectsModule.forRoot([AuthenticationEffects]),
      StoreDevtoolsModule.instrument()
    ),
  ],
}
