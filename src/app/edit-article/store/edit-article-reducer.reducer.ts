import { Action, createReducer, on } from '@ngrx/store';
import { EditArticleStateInterface } from './types/edit-article-state.interface';
import { updateArticleAction, updateArticleFailureAction, updateArticleSuccessAction } from './actions/update-article.actions';
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from './actions/get-article.actions';


export const initialState: EditArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null,
  isLoading: false,
  article: null
};

const editArticleReducer = createReducer(
  initialState,
  on(
    updateArticleAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),
  on(
    updateArticleSuccessAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isSubmitting: false
    })
  ),
  on(
    updateArticleFailureAction,
    (state, action): EditArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  ),
  on(
    getArticleAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getArticleSuccessAction,
    (state, action): EditArticleStateInterface => ({
      ...state,
      isLoading: false,
      article: action.article
    })
  ),
  on(
    getArticleFailureAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isLoading: false
    })
  )
)

export function editArticleReducers(state: EditArticleStateInterface, action: Action) {
  return editArticleReducer(state, action)
}

