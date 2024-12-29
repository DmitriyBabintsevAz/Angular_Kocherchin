
import { PopularTagsStateInterface } from './../types/popular-tags-state.interface';
import { Action, createReducer, on } from '@ngrx/store';

import { getPopularTagsAction, getPopularTagsFailureAction, getPopularTagsSuccessAction } from './actions/get-popular-tags.actions';




export const initialState: PopularTagsStateInterface = {
  data: null,
  isLoading: false,
  error: null
};

export const popularTagsReducer = createReducer(
  initialState,
  on(getPopularTagsAction, (state): PopularTagsStateInterface => ({
    ...state,
    isLoading: true
  })),
  on(getPopularTagsSuccessAction, (state, action): PopularTagsStateInterface => ({
    ...state,
    isLoading: false,
    data: action.popularTags
  })),
  on(getPopularTagsFailureAction, (state): PopularTagsStateInterface => ({
    ...state,
    isLoading: false
  }))
);


export function reducers(state: PopularTagsStateInterface, action: Action) {
  return popularTagsReducer(state, action)
}

