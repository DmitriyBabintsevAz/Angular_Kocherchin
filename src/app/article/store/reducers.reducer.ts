import { ArticleStateInterface } from './../types/article-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from './actions/get-article.actions';
import { routerNavigationAction } from '@ngrx/router-store';



export const initialState: ArticleStateInterface = {
  isloading: false,
  error: null,
  data: null
};

const articleReducer = createReducer(
  initialState,
  on(
    getArticleAction,
    (state): ArticleStateInterface => ({
      ...state,
      isloading: true
    })
  ),
  on(
    getArticleSuccessAction,
    (state, action): ArticleStateInterface => ({
      ...state,
      isloading: false,
      data: action.article
    })
  ),

  on(
    getArticleFailureAction,
    (state): ArticleStateInterface => ({
      ...state,
      isloading: false,
    })
  ),

  on(routerNavigationAction, (): ArticleStateInterface => initialState)

);

export function reducers(state: ArticleStateInterface, action: Action) {
  return articleReducer(state, action)
}

