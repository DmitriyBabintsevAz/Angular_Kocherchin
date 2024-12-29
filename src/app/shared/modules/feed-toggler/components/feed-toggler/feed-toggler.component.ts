import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoggedInSelector } from '../../../../../auth/store/auth-feature-selector.selectors';

@Component({
  selector: 'app-feed-toggler',
  templateUrl: './feed-toggler.component.html',
  styleUrl: './feed-toggler.component.scss'
})
export class FeedTogglerComponent implements OnInit {
  @Input('tagName') tagNameProps: string | null

  isloggedIn$: Observable<boolean>

  constructor(private store: Store) {

  }

  initializeValues(): void {
    this.isloggedIn$ = this.store.pipe(select(isLoggedInSelector))
  }

  ngOnInit(): void {
    this.initializeValues()
  }
}
