import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';
import { CurrentUserInterface } from '../shared/interfaces/current-user.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { AuthResponseInterface } from '../auth/types/auth-response.interface';
import { LoginRequestInterface } from '../auth/types/login-request.interface';
import { RegisterRequestInterface } from '../auth/types/register-request.interface';
import { CurrentUserInputInterface } from '../shared/types/current-user-input.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users';

    return this.http.post<AuthResponseInterface>(url, data).pipe(map(this.getUser))
  }


  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users/login'

    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }


  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/user';

    return this.http.get(url).pipe(map(this.getUser))
  }

  updateCurrentUser(currentUserInput: CurrentUserInputInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/user'
    console.log(currentUserInput);

    return this.http.put(url, currentUserInput).pipe(map(this.getUser))
  }

}
