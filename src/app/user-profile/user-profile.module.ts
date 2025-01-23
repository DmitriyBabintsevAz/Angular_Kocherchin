import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RouterModule } from '@angular/router';
import { UserProfileService } from './services/user-profile.service';
import { EffectsModule } from '@ngrx/effects';
import { GetUserProfileEffects } from './store/effects/get-user-profile.effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/user-profile.reducer';
import { FeedModule } from "../shared/modules/feed/feed.module";

const routes = [
  {
    path: 'profiles/:slug',
    component: UserProfileComponent
  },
  {
    path: 'profiles/:slug/favorites',
    component: UserProfileComponent
  }
]

@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetUserProfileEffects]),
    StoreModule.forFeature('userProfile', reducers),
    FeedModule
  ],
  providers: [UserProfileService]
})
export class UserProfileModule { }
