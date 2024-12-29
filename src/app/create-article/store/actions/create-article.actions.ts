import { ArticleInputInterface } from './../../../shared/types/article-input.interface';
import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types';
import { BackendErrorsInterface } from '../../../shared/types/backend-errors.interface';
import { ArticleInterface } from '../../../shared/types/article.interface';

export const CreateArticleAction = createAction(
  ActionTypes.CREATE_ARTICLE,
  props<{ articleInput: ArticleInputInterface }>()
)

export const CreateArticleSuccessAction = createAction(
  ActionTypes.CREATE_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
)


export const CreateArticleFailureAction = createAction(
  ActionTypes.CREATE_ARTICLE_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
)
