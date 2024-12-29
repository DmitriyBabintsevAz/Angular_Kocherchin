import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PopularTagsService } from '../../services/popular-tags.service';
import { getPopularTagsAction, getPopularTagsFailureAction, getPopularTagsSuccessAction } from '../actions/get-popular-tags.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { PopularTagsType } from '../../../../types/popular-tags-type';



@Injectable()
export class GetPopularTagsEffects {

  getPopulatTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(() => {
        return this.popularTagsService.getPopularTags().pipe(
          map((popularTags: PopularTagsType[]) => {
            return getPopularTagsSuccessAction({ popularTags })
          }),
          catchError(() => {
            return of(getPopularTagsFailureAction)
          })
        )
      })
    ))

  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService) { }
}
