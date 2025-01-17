import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToFavoritesComponent } from './components/add-to-favorites/add-to-favorites.component';
import { AddToFavoritesService } from './services/add-to-favorites.service';
import { AddToFavoritesEffects } from './store/effects/add-to-favorites.effects';



@NgModule({
  declarations: [
    AddToFavoritesComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([AddToFavoritesEffects])
  ],
  exports: [AddToFavoritesComponent],
  providers: [AddToFavoritesService]
})
export class AddToFavoritesModule { }
