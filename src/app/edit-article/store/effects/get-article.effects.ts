import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ArticleService as SharedArticleService } from '../../../shared/services/article.service';
import { getArticleAction } from '../../../article/store/actions/get-article.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { ArticleInterface } from '../../../shared/types/article.interface';
import { getArticleFailureAction, getArticleSuccessAction } from '../actions/get-article.actions';



@Injectable()
export class GetArticleEffects {

  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this.sharedArticleService.getArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return getArticleSuccessAction({ article })
          }),
          catchError(() => {
            return of(getArticleFailureAction())
          })
        )
      })
    ))

  constructor(
    private actions$: Actions,
    private sharedArticleService: SharedArticleService
  ) { }
}
