import { createSelector } from '@ngrx/store';

import { AppState } from '../state';

export const selectAuthenticationFeature = (state: AppState) =>
  state.authentication;

export const selectRegisterIsLoading = createSelector(
  selectAuthenticationFeature,
  (state) => state.registerIsLoading,
);
export const selectRegisterError = createSelector(
  selectAuthenticationFeature,
  (state) => state.registerError,
);

export const selectLoginIsLoading = createSelector(
  selectAuthenticationFeature,
  (state) => state.loginIsLoading,
);
export const selectLoginError = createSelector(
  selectAuthenticationFeature,
  (state) => state.loginError,
);

export const selectLogoutIsLoading = createSelector(
  selectAuthenticationFeature,
  (state) => state.logoutIsLoading,
);
export const selectLogoutError = createSelector(
  selectAuthenticationFeature,
  (state) => state.logoutError,
);

export const selectUser = createSelector(
  selectAuthenticationFeature,
  (state) => state.user,
);
