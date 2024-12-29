import { ErrorMessagesModule } from './../error-messages/error-messages.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';
import { PopularTagsService } from './services/popular-tags.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GetPopularTagsEffects } from './store/effects/get-popular-tags.effects';
import { RouterModule } from '@angular/router';
import { LoadingModule } from '../loading/loading.module';



@NgModule({
  declarations: [
    PopularTagsComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature(GetPopularTagsEffects),
    RouterModule,
    LoadingModule,
    ErrorMessagesModule
  ],
  exports: [
    PopularTagsComponent
  ],
  providers: [
    PopularTagsService
  ]
})
export class PopularTagsModule { }
