import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FeedService } from '../../services/feed.service';
import { GetFeedActions, GetFeedFailureActions, GetFeedSuccessActions } from '../actions/get-feed.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { GetFeedResponseInterface } from '../../types/get-feed-response.interface';


@Injectable()
export class GetFeedEffects {

  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetFeedActions),
      switchMap(({ url }) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: GetFeedResponseInterface) => {
            return GetFeedSuccessActions({ feed })
          }),
          catchError(() => {
            return of(GetFeedFailureActions())
          })
        )
      })
    ))

  constructor(
    private actions$: Actions,
    private feedService: FeedService
  ) { }
}
