import { createAction } from '@ngrx/store';
import { ActionTypes } from '../action-types';

export const logoutActions = createAction(ActionTypes.LOGOUT)
