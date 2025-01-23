import { CurrentUserInterface } from './../../../shared/interfaces/current-user.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProfileInterface } from '../../../shared/types/profile.interface';
import { combineLatest, filter, map, Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { GetUserProfileAction } from '../../store/actions/get-user-profile.actions';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { errorSelectorUserProf, isLoadingSelectorUserProf, userProfileSelector } from '../../store/user-profile-selectors.selectors';
import { currentUserSelector } from '../../../auth/store/auth-feature-selector.selectors';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
  // standalone: false
})
export class UserProfileComponent implements OnInit, OnDestroy {
  userProfile: ProfileInterface
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  userProfileSubscription: Subscription
  slug: string
  apiUrl: string
  isCurrentUserProfile$: Observable<boolean>

  constructor(private store: Store,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
  }

  ngOnDestroy(): void {
    this.userProfileSubscription.unsubscribe()
  }

  initializeValues(): void {

    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isLoading$ = this.store.pipe(select(isLoadingSelectorUserProf))
    this.error$ = this.store.pipe(select(errorSelectorUserProf))
    this.isCurrentUserProfile$ = combineLatest(
      this.store.pipe(select(currentUserSelector), filter(Boolean)),

      this.store.pipe(select(userProfileSelector), filter(Boolean))
    ).pipe(map(([currentUser, userProfile]: [CurrentUserInterface, ProfileInterface]) => {
      return currentUser.username === userProfile.username
    }))
  }

  initializeListeners(): void {
    this.userProfileSubscription = this.store.pipe(select(userProfileSelector))
      .subscribe((userProfile: ProfileInterface) => {
        this.userProfile = userProfile
      })

    this.route.params.subscribe((params: Params) => {
      this.slug = params['slug']
      this.fetchUserProfile()

    })
  }

  fetchUserProfile(): void {
    this.store.dispatch(GetUserProfileAction({ slug: this.slug }))
  }

  getApiUrl(): string {
    const isFavorites = this.router.url.includes('favorites')
    this.apiUrl = isFavorites
      ? `/articles?favorited=${this.slug}`
      : `/articles?author=${this.slug}`

    return this.apiUrl
  }

}

