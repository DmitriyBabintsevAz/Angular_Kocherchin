import { FeedStateInterface } from './../types/feed-state.interface';
import { createReducer, on } from '@ngrx/store';
import { GetFeedActions, GetFeedFailureActions, GetFeedSuccessActions } from './actions/get-feed.actions';
import { routerNavigationAction } from '@ngrx/router-store';



export const initialState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null
};

export const feedreducer = createReducer(
  initialState,
  on(
    GetFeedActions,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true
    })),
  on(
    GetFeedSuccessActions,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
      data: action.feed
    })),
  on(
    GetFeedFailureActions,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: false
    })),
  on(routerNavigationAction,
    (): FeedStateInterface => initialState
  )
);

