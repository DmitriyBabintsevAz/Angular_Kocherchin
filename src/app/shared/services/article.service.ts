import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { GetarticleResponseInterface } from '../types/getarticle-response.interface';
import { ArticleInterface } from '../types/article.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`

    return this.http.get<GetarticleResponseInterface>(fullUrl).pipe(map((response: GetarticleResponseInterface) => {
      
      return response.article
    }))
  }
}
