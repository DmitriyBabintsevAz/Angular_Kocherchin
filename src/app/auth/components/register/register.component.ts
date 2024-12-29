import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { registerAction } from '../../store/actions/register.actions';
import { Observable } from 'rxjs';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/auth-feature-selector.selectors';
import { AppStateInterface } from '../../../shared/types/app-state.interface';
import { BackendErrorsInterface } from '../../../shared/types/backend-errors.interface';
import { RegisterRequestInterface } from '../../types/register-request.interface';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  standalone: false
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;
  isSubmitting$!: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>
  ) { }


  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  onSubmit() {
    const request: RegisterRequestInterface = {
      user: this.form.value
    }

    this.store.dispatch(registerAction({ request }))

  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

}
