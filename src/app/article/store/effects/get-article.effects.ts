import { ArticleInterface } from './../../../shared/types/article.interface';
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from './../actions/get-article.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ArticleService as SharedArticleService } from '../../../shared/services/article.service';
import { catchError, map, switchMap, of } from 'rxjs';



@Injectable()
export class GetArticleEffects {
  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this.articleService.getArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return getArticleSuccessAction({ article })
          }),
          catchError(() => {
            return of(getArticleFailureAction())
          })
        )
      })
    )
  )


  constructor(
    private actions$: Actions,
    private articleService: SharedArticleService
  ) { }
}
