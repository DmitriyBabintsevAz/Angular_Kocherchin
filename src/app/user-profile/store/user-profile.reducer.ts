
import { Action, createReducer, on } from '@ngrx/store';
import { UserProfileStateInterface } from '../types/user-profile-state.interface';
import { GetUserProfileAction, GetUserProfileFailureAction, GetUserProfileSuccessAction } from './actions/get-user-profile.actions';




const initialState: UserProfileStateInterface = {
  isLoading: false,
  error: null,
  data: null
};
const userProfileReducer = createReducer(
  initialState,
  on(
    GetUserProfileAction,
    (state): UserProfileStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    GetUserProfileSuccessAction,
    (state, action): UserProfileStateInterface => ({
      ...state,
      isLoading: false,
      data: action.userProfile
    })
  ),
  on(
    GetUserProfileFailureAction,
    (state): UserProfileStateInterface => ({
      ...state,
      isLoading: false
    })
  )
)

export function reducers(state: UserProfileStateInterface, action: Action) {
  return userProfileReducer(state, action)
}

