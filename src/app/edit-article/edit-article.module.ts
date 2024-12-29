import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { RouterModule } from '@angular/router';
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';
import { EditArticleService } from './services/edit-article.service';
import { ArticleService as SharedArticleService } from '../shared/services/article.service';
import { EffectsModule } from '@ngrx/effects';
import { GetArticleEffects } from './store/effects/get-article.effects';
import { UpdateArticleEffects } from './store/effects/update-article.effects';
import { StoreModule } from '@ngrx/store';
import { editArticleReducers } from './store/edit-article-reducer.reducer';

const routes = [
  {
    path: 'articles/',
    component: EditArticleComponent
  }
]

@NgModule({
  declarations: [
    EditArticleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([GetArticleEffects, UpdateArticleEffects]),
    StoreModule.forFeature('editArticle', editArticleReducers)
  ],
  providers: [
    EditArticleService,
    SharedArticleService
  ]
})
export class EditArticleModule { }
