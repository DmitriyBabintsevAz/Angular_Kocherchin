import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { UProfActionTypes } from '../uprof-action-types';
import { ProfileInterface } from '../../../shared/types/profile.interface';

export const GetUserProfileAction = createAction(
  UProfActionTypes.GET_USER_PROFILE,
  props<{ slug: string }>()
)
export const GetUserProfileSuccessAction = createAction(
  UProfActionTypes.GET_USER_PROFILE_SUCCESS,
  props<{ userProfile: ProfileInterface }>()
)
export const GetUserProfileFailureAction = createAction(
  UProfActionTypes.GET_USER_PROFILE_FAILURE)
