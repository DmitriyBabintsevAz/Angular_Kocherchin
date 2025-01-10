import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { logoutActions } from '../actions/sync.actions';
import { tap } from 'rxjs';
import { PersistanceService } from '../../../shared/services/persistance.service';
import { Router } from '@angular/router';



@Injectable()
export class LogoutEffects {
  logout$ = createEffect(
    () => this.actions$.pipe(
      ofType(logoutActions),
      tap(() => {
        this.persistanceService.set('accessToken', '')
        this.router.navigateByUrl('/')
      })
    ),
    { dispatch: false }
  )

  constructor(
    private actions$: Actions,
    private persistanceService: PersistanceService,
    private router: Router
  ) { }
}
