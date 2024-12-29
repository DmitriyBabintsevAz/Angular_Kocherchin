import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArticleInputInterface } from '../../shared/types/article-input.interface';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { SaveArticleResponseInterface } from '../../shared/types/save-article-response.interface';

@Injectable({
  providedIn: 'root'
})
export class EditArticleService {

  constructor(private http: HttpClient) { }


  updateArticle(
    slug: string,
    articleInput: ArticleInputInterface
  ): Observable<ArticleInputInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`

    return this.http.put<SaveArticleResponseInterface>(fullUrl, { article: articleInput })
      .pipe(map((response: SaveArticleResponseInterface) => response.article))
  }

}
