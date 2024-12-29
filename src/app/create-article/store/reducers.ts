import { CreateArticleStateInterface } from './../types/create-article-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { CreateArticleAction, CreateArticleFailureAction, CreateArticleSuccessAction } from './actions/create-article.actions';



export const initialState: CreateArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null
};

const createArticleReducer = createReducer(
  initialState,
  on(
    CreateArticleAction,
    (state): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),
  on(
    CreateArticleSuccessAction,
    (state): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: false
    })
  ),
  on(
    CreateArticleFailureAction,
    (state, action): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  )
)

export function reducers(state: CreateArticleStateInterface, action: Action) {
  return createArticleReducer(state, action)
}

