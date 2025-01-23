import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import { ArticleFormComponent } from '../article-form/components/article-form/article-form.component';
import { ArticleFormModule } from '../article-form/article-form.module';

const routes = [
  {
    path: 'articles/new',
    component: ArticleFormComponent
  }

]


@NgModule({
  declarations: [
    TopBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // RouterModule.forChild(routes),
    // ArticleFormModule
  ],
  exports: [TopBarComponent]
})
export class TopBarModule { }
