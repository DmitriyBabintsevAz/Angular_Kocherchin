import { CreateArticleAction, CreateArticleFailureAction } from './../actions/create-article.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CreateArticleService } from '../../services/create-article.service';
import { Router } from '@angular/router';
import { CreateArticleSuccessAction } from '../actions/create-article.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ArticleInterface } from '../../../shared/types/article.interface';
import { HttpErrorResponse } from '@angular/common/http';



@Injectable()
export class CreateArticleEffects {

  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CreateArticleAction),
      switchMap(({ articleInput }) => {
        return this.createArticleService.createArticle(articleInput).pipe(
          map((article: ArticleInterface) => {
            return CreateArticleSuccessAction({ article })
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              CreateArticleFailureAction({ errors: errorResponse.error.errors })
            )
          })
        )
      })
    ))

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CreateArticleSuccessAction),
        tap(({ article }) => {
          this.router.navigate(['/articles', article.slug])
        })
      ),
    { dispatch: false }
  )

  constructor(
    private actions$: Actions,
    private createArticleService: CreateArticleService,
    private router: Router) { }
}
