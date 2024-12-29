import { Component, OnInit } from '@angular/core';
import { ArticleInputInterface } from '../../../shared/types/article-input.interface';
import { Observable } from 'rxjs';
import { BackendErrorsInterface } from '../../../shared/types/backend-errors.interface';
import { select, Store } from '@ngrx/store';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors.selectors';
import { CreateArticleAction } from '../../store/actions/create-article.actions';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrl: './create-article.component.scss'
})
export class CreateArticleComponent implements OnInit {
  initialValues: ArticleInputInterface = {
    title: '',
    description: '',
    body: '',
    tagList: []
  }

  isSubmitting$: Observable<boolean>
  backendError$: Observable<BackendErrorsInterface>


  constructor(private store: Store) { }

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendError$ = this.store.pipe(select(validationErrorsSelector))
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(CreateArticleAction({ articleInput }))
  }

}
