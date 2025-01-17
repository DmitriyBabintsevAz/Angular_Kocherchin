import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AddToFavoritesService } from '../../services/add-to-favorites.service';
import { AddToFavoritesAction, AddToFavoritesFailureAction, AddToFavoritesSuccessAction } from '../actions/add-to-favorites.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { ArticleInterface } from '../../../../types/article.interface';



@Injectable()
export class AddToFavoritesEffects {

  addToFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddToFavoritesAction),
      switchMap(({ isFavorited, slug }) => {
        const article$ = isFavorited ? this.addToFavoritesService.removeFromFavorites(slug) : this.addToFavoritesService.addToFavorites(slug)

        return article$.pipe(
          map((article: ArticleInterface) => {
            return AddToFavoritesSuccessAction({ article })
          }),
          catchError(() => {
            return of(AddToFavoritesFailureAction())
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private addToFavoritesService: AddToFavoritesService
  ) { }
}
