import { createAction, props } from '@ngrx/store';

import { User } from '../../models/user';

const createActionName = (actionName: string): string => {
  const namespace = '[Authentication]';

  return `${namespace} ${actionName}`;
};

export const register = createAction(
  createActionName('Register'),
  props<{ email: string; password: string; username: string }>(),
);
export const registerSuccess = createAction(
  createActionName('Register Success'),
);
export const registerFailure = createAction(
  createActionName('Register Failure'),
  props<{ error: string }>(),
);

export const login = createAction(
  createActionName('Login'),
  props<{ email: string; password: string }>(),
);
export const loginSuccess = createAction(
  createActionName('Login Success'),
  props<{ user: User }>(),
);
export const loginFailure = createAction(
  createActionName('Login Failure'),
  props<{ error: string }>(),
);

export const logout = createAction(createActionName('Logout'));
export const logoutSuccess = createAction(createActionName('Logout Success'));
export const logoutFailure = createAction(
  createActionName('Logout Failure'),
  props<{ error: string }>(),
);
