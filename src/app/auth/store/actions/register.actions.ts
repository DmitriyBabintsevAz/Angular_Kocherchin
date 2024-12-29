
import { createAction, props } from '@ngrx/store'
import { ActionTypes } from '../action-types';
import { CurrentUserInterface } from '../../../shared/interfaces/current-user.interface';
import { BackendErrorsInterface } from '../../../shared/types/backend-errors.interface';
import { RegisterRequestInterface } from '../../types/register-request.interface';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
)
