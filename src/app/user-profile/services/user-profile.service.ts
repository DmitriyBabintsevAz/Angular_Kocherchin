import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProfileInterface } from '../../shared/types/profile.interface';
import { environment } from '../../../environments/environment.development';
import { GetUserProfileResponse } from '../types/get-user-profile-response';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private http: HttpClient) { }


  getUserProfile(slug: string): Observable<ProfileInterface> {
    const url = `${environment.apiUrl}/profiles/${slug}`

    return this.http.get(url)
      .pipe(map((response: GetUserProfileResponse) => response.profile))
  }
}
