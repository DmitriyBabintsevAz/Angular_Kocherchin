import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getPopularTagsAction } from '../../store/actions/get-popular-tags.actions';
import { Observable } from 'rxjs';
import { PopularTagsType } from '../../../../types/popular-tags-type';
import { errorSelector, isLoadingelector, popularTagsSelector } from '../../store/selectors.selectors';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrl: './popular-tags.component.scss'
})
export class PopularTagsComponent implements OnInit {
  popularTags$: Observable<PopularTagsType[] | null>
  isloading$: Observable<boolean>
  error$: Observable<string | null>

  constructor(private store: Store) {

  }

  ngOnInit(): void {
    this.initializeValuse();
    this.fethcData();
  }


  initializeValuse(): void {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector))
    this.isloading$ = this.store.pipe(select(isLoadingelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  fethcData(): void {
    this.store.dispatch(getPopularTagsAction())
  }

}
