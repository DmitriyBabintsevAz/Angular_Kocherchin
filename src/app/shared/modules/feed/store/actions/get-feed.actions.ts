import { GetFeedResponseInterface } from '../../types/get-feed-response.interface';
import { ActionTypes } from './../action-types';
import { createAction, props } from '@ngrx/store';

export const GetFeedActions = createAction(
  ActionTypes.GET_FEED,
  props<{ url: string }>()
);

export const GetFeedSuccessActions = createAction(
  ActionTypes.GET_FEED_SUCCESS,
  props<{ feed: GetFeedResponseInterface }>()
);

export const GetFeedFailureActions = createAction(
  ActionTypes.GET_FEED_FAILURE
);
