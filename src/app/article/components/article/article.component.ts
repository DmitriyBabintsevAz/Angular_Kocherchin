import { CurrentUserInterface } from './../../../shared/interfaces/current-user.interface';
import { ArticleInterface } from './../../../shared/types/article.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getArticleAction } from '../../store/actions/get-article.actions';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map, Observable, Subscription } from 'rxjs';
import { articleSelector, errorSelector, isLoadingSelector } from '../../store/selectors.selectors';
import { currentUserSelector } from '../../../auth/store/auth-feature-selector.selectors';
import { deleteArticleAction } from '../../store/actions/delete-article.actions';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit, OnDestroy {


  slug: string
  article: ArticleInterface | null
  articleSubscription: Subscription
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  isAuthor$: Observable<boolean>

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {

    this.initializeValues();
    this.initializeListeners();
    if (this.slug !== 'new') {
      this.fetchData();

    }
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe()
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.isAuthor$ = combineLatest(
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector))
    ).pipe(map(([article, currentUser]: [ArticleInterface | null, CurrentUserInterface | null]) => {
      if (!article || !currentUser) {
        return false
      }
      return currentUser.username === article.author.username
    }))
  }

  initializeListeners(): void {
    this.articleSubscription = this.store
      .pipe(select(articleSelector))
      .subscribe((article: ArticleInterface | null) => { this.article = article })
  }

  fetchData(): void {


    // if (this.slug !== 'new') {
    this.store.dispatch(getArticleAction({ slug: this.slug }))
    // }

  }

  deleteArticle(): void {
    this.store.dispatch(deleteArticleAction({ slug: this.slug }))
  }

}
