import { createAction, props } from '@ngrx/store';
import { FavActionTypes } from '../fav-action-types';
import { ArticleInterface } from '../../../../types/article.interface';

export const AddToFavoritesAction = createAction(
  FavActionTypes.ADD_TO_FAVORITES,
  props<{ isFavorited: boolean; slug: string }>()
)

export const AddToFavoritesSuccessAction = createAction(
  FavActionTypes.ADD_TO_FAVORITES_SUCCESS,
  props<{ article: ArticleInterface }>()
)

export const AddToFavoritesFailureAction = createAction(
  FavActionTypes.ADD_TO_FAVORITES_FAILURE,
)
