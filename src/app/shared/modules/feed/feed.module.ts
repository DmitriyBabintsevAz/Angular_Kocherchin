import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './components/feed/feed.component';
import { GetFeedEffects } from './store/effects/get-feed.effects';
import { StoreModule } from '@ngrx/store';
import { feedreducer } from './store/reducers.reducer';
import { FeedService } from './services/feed.service';
import { RouterModule } from '@angular/router';
import { ErrorMessagesModule } from '../error-messages/error-messages.module';
import { LoadingModule } from '../loading/loading.module';
import { PaginationModule } from '../pagination/pagination.module';
import { TagListModule } from '../tag-list/tag-list.module';
import { AddToFavoritesModule } from '../add-to-favorites/add-to-favorites.module';




@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffects]),
    StoreModule.forFeature('feed', feedreducer),
    RouterModule,
    ErrorMessagesModule,
    LoadingModule,
    PaginationModule,
    TagListModule,
    AddToFavoritesModule,

  ],
  exports: [
    FeedComponent
  ],
  providers: [FeedService]
})
export class FeedModule { }
