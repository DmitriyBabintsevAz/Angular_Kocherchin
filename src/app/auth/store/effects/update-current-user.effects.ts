import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CurrentUserInterface } from '../../../shared/interfaces/current-user.interface';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { updateCurrentUserAction, updateCurrentUserFailureAction, updateCurrentUserSuccessAction } from '../actions/update-current-user.actions';


@Injectable()
export class UpdateCurrentUserEffects {

  updateCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCurrentUserAction),
      switchMap(({ currentUserInput }) => {
        return this.authService.updateCurrentUser(currentUserInput).pipe(
          map((currentUser: CurrentUserInterface) => {
            return updateCurrentUserSuccessAction({ currentUser })
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(updateCurrentUserFailureAction({ errors: errorResponse.error.errors }))
          })
        )
      })
    )
  );


  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {

  }

}
