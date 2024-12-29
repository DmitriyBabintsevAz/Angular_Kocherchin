import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PopularTagsType } from '../../../types/popular-tags-type';
import { environment } from '../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { GetPopularTagsResponseInterface } from '../types/get-popular-tags-response.interface';

@Injectable({
  providedIn: 'root'
})
export class PopularTagsService {

  constructor(private http: HttpClient) { }



  getPopularTags(): Observable<PopularTagsType[]> {
    const url = environment.apiUrl + '/tags';

    return this.http.get(url).pipe(map((response: GetPopularTagsResponseInterface) => {
      return response.tags;
    }))
  }
}
