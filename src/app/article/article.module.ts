import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './components/article/article.component';
import { ArticleService as SharedArticleService } from '../shared/services/article.service';
import { EffectsModule } from '@ngrx/effects';
import { GetArticleEffects } from './store/effects/get-article.effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers.reducer';
import { RouterModule } from '@angular/router';
import { ErrorMessagesModule } from '../shared/modules/error-messages/error-messages.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { TagListModule } from "../shared/modules/tag-list/tag-list.module";
import { ArticleService } from './services/article.service';
import { DeleteArticleEffects } from './store/effects/delete-article.effects';

const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent
  }
]


@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffects, DeleteArticleEffects]),
    StoreModule.forFeature('article', reducers),
    RouterModule.forChild(routes),
    ErrorMessagesModule,
    LoadingModule,
    TagListModule
  ],
  providers: [
    SharedArticleService,
    ArticleService
  ]
})
export class ArticleModule { }
