import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ArticleInterface } from '../../../types/article.interface';
import { environment } from '../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { GetarticleResponseInterface } from '../../../types/getarticle-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AddToFavoritesService {
  constructor(private http: HttpClient) { }

  addToFavorites(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug)
    return this.http.post(url, {}).pipe(map(this.getArticle))
  }

  removeFromFavorites(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug)

    return this.http.delete(url).pipe(map(this.getArticle))

  }

  getUrl(slug: string): string {
    return `${environment.apiUrl}/articles/${slug}/favorite`
  }

  getArticle(response: GetarticleResponseInterface): ArticleInterface {
    return response.article
  }
}
