import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUserInterface } from '../../../../interfaces/current-user.interface';
import { select, Store } from '@ngrx/store';
import { currentUserSelector, isAnonymousSelector, isLoggedInSelector } from '../../../../../auth/store/auth-feature-selector.selectors';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
  standalone: false
})
export class TopBarComponent implements OnInit {
  isloggedIn$: Observable<boolean>
  isAnonymous$: Observable<boolean>
  currentUser$: Observable<CurrentUserInterface> | null

  constructor(private store: Store) {

  }

  ngOnInit(): void {
    this.isloggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }

}
