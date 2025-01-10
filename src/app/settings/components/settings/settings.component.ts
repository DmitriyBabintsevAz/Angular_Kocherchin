import { CurrentUserInterface } from './../../../shared/interfaces/current-user.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { filter, Observable, Subscription } from 'rxjs';
import { currentUserSelector } from '../../../auth/store/auth-feature-selector.selectors';
import { BackendErrorsInterface } from '../../../shared/types/backend-errors.interface';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors.selectors';
import { updateCurrentUserAction } from '../../../auth/store/actions/update-current-user.actions';
import { CurrentUserInputInterface } from '../../../shared/types/current-user-input.interface';
import { logoutActions } from '../../../auth/store/actions/sync.actions';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit, OnDestroy {



  currentUser: CurrentUserInterface
  currentUserSubscription: Subscription
  form: FormGroup
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>

  constructor(private fb: FormBuilder, private store: Store) {

  }

  ngOnInit(): void {
    this.initializeValues()
    this.initialListeners()
  }

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe()
  }

  initialListeners(): void {
    this.currentUserSubscription = this.store.pipe(select(currentUserSelector), filter(Boolean)).
      subscribe((curUser: CurrentUserInterface) => {
        this.currentUser = curUser
        this.initializeForm()
      })
  }

  initializeForm(): void {
    this.form = this.fb.group({
      image: this.currentUser.image,
      username: this.currentUser.username,
      bio: this.currentUser.bio,
      email: this.currentUser.email,
      password: ''
    })
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  submit() {
    const currentUserInput: CurrentUserInputInterface = {
      ...this.currentUser,
      ...this.form.value
    }

    // console.log(currentUserInput);

    this.store.dispatch(updateCurrentUserAction({ currentUserInput }))
  }

  logout() {
    this.store.dispatch(logoutActions())
  }

}
