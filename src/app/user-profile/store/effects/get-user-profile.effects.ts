import { UserProfileService } from './../../services/user-profile.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GetUserProfileAction, GetUserProfileFailureAction, GetUserProfileSuccessAction } from '../actions/get-user-profile.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { ProfileInterface } from '../../../shared/types/profile.interface';



@Injectable()
export class GetUserProfileEffects {

  getUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetUserProfileAction),
      switchMap(({ slug }) => {
        return this.userProfileService.getUserProfile(slug).pipe(
          map((userProfile: ProfileInterface) => {
            return GetUserProfileSuccessAction({ userProfile })
          }),
          catchError(() => {
            return of(GetUserProfileFailureAction())
          })
        )
      })
    ))

  constructor(
    private actions$: Actions,
    private userProfileService: UserProfileService
  ) { }
}
