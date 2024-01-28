import { createReducer, on } from '@ngrx/store'
import { cloneDeep } from 'lodash-es'

import { User } from '../../models/user'
import {
  login,
  loginFailure,
  loginSuccess,
  logout,
  logoutFailure,
  logoutSuccess,
  register,
  registerFailure,
  registerSuccess,
} from './actions'
import { AuthenticationState } from './state'

export const initialState: AuthenticationState = new AuthenticationState()

export const authenticationReducer = createReducer(
  initialState,
  on(register, (state) => {
    const clonedState = cloneDeep(state)

    return { ...clonedState, registerIsLoading: true }
  }),
  on(registerSuccess, (state) => {
    const clonedState = cloneDeep(state)

    return { ...clonedState, registerIsLoading: false }
  }),
  on(registerFailure, (state, { error }) => {
    const clonedState = cloneDeep(state)

    return { ...clonedState, registerIsLoading: false, registerError: error }
  }),
  on(login, (state) => {
    const clonedState = cloneDeep(state)

    return { ...clonedState, loginIsLoading: true }
  }),
  on(loginSuccess, (state, { user }) => {
    const clonedState = cloneDeep(state)

    return { ...clonedState, loginIsLoading: false, user }
  }),
  on(loginFailure, (state, { error }) => {
    const clonedState = cloneDeep(state)

    return { ...clonedState, loginIsLoading: false, loginError: error }
  }),
  on(logout, (state) => {
    const clonedState = cloneDeep(state)

    return { ...clonedState, logoutIsLoading: true }
  }),
  on(logoutSuccess, (state) => {
    const clonedState = cloneDeep(state)

    return { ...clonedState, logoutIsLoading: false, user: new User() }
  }),
  on(logoutFailure, (state, { error }) => {
    const clonedState = cloneDeep(state)

    return { ...clonedState, logoutIsLoading: false, logoutError: error }
  })
)