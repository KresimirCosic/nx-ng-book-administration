import { createSelector } from '@ngrx/store'

import { AppState } from '../state'

export const selectAuthenticationFeature = (state: AppState) =>
  state.authentication

/**
 * Register
 */
export const selectRegisterIsLoading = createSelector(
  selectAuthenticationFeature,
  (state) => state.registerIsLoading
)
export const selectRegisterError = createSelector(
  selectAuthenticationFeature,
  (state) => state.registerError
)

/**
 * Login
 */
export const selectLoginIsLoading = createSelector(
  selectAuthenticationFeature,
  (state) => state.loginIsLoading
)
export const selectLoginError = createSelector(
  selectAuthenticationFeature,
  (state) => state.loginError
)

/**
 * Logout
 */
export const selectLogoutIsLoading = createSelector(
  selectAuthenticationFeature,
  (state) => state.logoutIsLoading
)
export const selectLogoutError = createSelector(
  selectAuthenticationFeature,
  (state) => state.logoutError
)

/**
 * User
 */
export const selectUser = createSelector(
  selectAuthenticationFeature,
  (state) => state.user
)

/**
 * Users
 */
export const selectUsers = createSelector(
  selectAuthenticationFeature,
  (state) => state.users
)
export const selectUsersAreLoading = createSelector(
  selectAuthenticationFeature,
  (state) => state.usersAreLoading
)
export const selectUsersError = createSelector(
  selectAuthenticationFeature,
  (state) => state.usersError
)
