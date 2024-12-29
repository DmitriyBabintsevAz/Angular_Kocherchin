import { ActionTypesPT } from './../action-types-pt';
import { PopularTagsType } from './../../../../types/popular-tags-type';
import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';

export const getPopularTagsAction = createAction(
  ActionTypesPT.GET_POPULAR_TAGS
)
export const getPopularTagsSuccessAction = createAction(
  ActionTypesPT.GET_POPULAR_TAGS_SUCCESS,
  props<{ popularTags: PopularTagsType[] }>()
)

export const getPopularTagsFailureAction = createAction(
  ActionTypesPT.GET_POPULAR_TAGS_FAILURE
)
