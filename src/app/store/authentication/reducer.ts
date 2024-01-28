import { createReducer, on } from '@ngrx/store';
import { cloneDeep } from 'lodash-es';

import {
  register,
  registerSuccess,
  registerFailure,
  login,
  loginSuccess,
  loginFailure,
  logout,
  logoutSuccess,
  logoutFailure,
} from './actions';
import { AuthenticationState } from './state';
import { User } from '../../models/user';

export const initialState: AuthenticationState = new AuthenticationState();

export const authenticationReducer = createReducer(
  initialState,
  on(register, (state) => {
    const clonedState = cloneDeep(state);

    return { ...clonedState, registerIsLoading: true };
  }),
  on(registerSuccess, (state) => {
    const clonedState = cloneDeep(state);

    return { ...clonedState, registerIsLoading: false };
  }),
  on(registerFailure, (state, { error }) => {
    const clonedState = cloneDeep(state);

    return { ...clonedState, registerIsLoading: false, registerError: error };
  }),
  on(login, (state) => {
    const clonedState = cloneDeep(state);

    return { ...clonedState, loginIsLoading: true };
  }),
  on(loginSuccess, (state, { user }) => {
    const clonedState = cloneDeep(state);

    return { ...clonedState, loginIsLoading: false, user };
  }),
  on(loginFailure, (state, { error }) => {
    const clonedState = cloneDeep(state);

    return { ...clonedState, loginIsLoading: false, loginError: error };
  }),
  on(logout, (state) => {
    const clonedState = cloneDeep(state);

    return { ...clonedState, logoutIsLoading: true };
  }),
  on(logoutSuccess, (state) => {
    const clonedState = cloneDeep(state);

    return { ...clonedState, logoutIsLoading: false, user: new User() };
  }),
  on(logoutFailure, (state, { error }) => {
    const clonedState = cloneDeep(state);

    return { ...clonedState, logoutIsLoading: false, logoutError: error };
  }),
);
