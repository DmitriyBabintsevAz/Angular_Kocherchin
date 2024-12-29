import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../../services/auth.service';
import { PersistanceService } from '../../../shared/services/persistance.service';
import { GetCurrentUserAction, GetCurrentUserFailureAction, GetCurrentUserSuccessAction } from '../actions/get-current-user.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { CurrentUserInterface } from '../../../shared/interfaces/current-user.interface';

@Injectable()
export class GetCurrentUserEffects {
  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetCurrentUserAction),
      switchMap(() => {
        const token = this.persistanceService.get('accessToken')
        if (!token) {
          return of(GetCurrentUserFailureAction())
        }
        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return GetCurrentUserSuccessAction({ currentUser })
          }),
          catchError(() => {
            return of(GetCurrentUserFailureAction())
          })
        )
      })
    ))

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) { }
}
