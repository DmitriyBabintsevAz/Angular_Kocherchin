import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/settings-reducers.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { BackendErrorMessagesModule } from '../shared/modules/backend-error-messages/backend-error-messages.module';
// import { EffectsModule } from '@ngrx/effects';
// import { LogoutEffects } from '../auth/store/effects/logout.effects';

const routes = [
  {
    path: 'settings',
    component: SettingsComponent
  }
]

@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    // SettingsComponent,
    RouterModule.forChild(routes),
    StoreModule.forFeature('settings', reducers),
    // EffectsModule.forFeature(LogoutEffects),
    ReactiveFormsModule,
    BackendErrorMessagesModule
  ]
})
export class SettingsModule { }
