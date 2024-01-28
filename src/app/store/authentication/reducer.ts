import { createReducer, on } from '@ngrx/store'
import { cloneDeep } from 'lodash-es'

import { User } from '../../models/user'
import {
  getUsers,
  getUsersFailure,
  getUsersSuccess,
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
  /**
   * Register
   */
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
  /**
   * Login
   */
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
  /**
   * Logout
   */
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
  }),
  /**
   * Users
   */
  on(getUsers, (state) => {
    const clonedState = cloneDeep(state)
    return { ...clonedState, usersAreLoading: true }
  }),
  on(getUsersSuccess, (state, { users }) => {
    const clonedState = cloneDeep(state)
    return { ...clonedState, usersAreLoading: false, users }
  }),
  on(getUsersFailure, (state, { error }) => {
    const clonedState = cloneDeep(state)
    return { ...clonedState, usersAreLoading: false, usersError: error }
  })
)
