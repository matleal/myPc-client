import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { User } from '../@shared/models/user.model';

import { Credentials, CredentialsService } from './credentials.service';

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  baseUrl = 'http://localhost:3000/v1/auth/login';

  user: User = {
    email: '',
    password: '',
    name: '',
  };

  constructor(private credentialsService: CredentialsService, private http: HttpClient) {}

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  login(context: LoginContext): Observable<Credentials> {
    // Replace by proper authentication call

    console.log(context);

    this.user.email = context.username;
    this.user.password = context.password;

    let data = {
      username: '',
      token: '',
    };

    this.http
      .post(this.baseUrl, this.user)
      .toPromise()
      .then(
        (res) => {
          console.log(res);
          const token = res['token'];
          const user = res['user'];
          console.log(res['token']);
          console.log(res['user']);

          data.username = user.email;
          data.token = token.accessToken;

          this.credentialsService.setCredentials(data, context.remember);
          console.log(this.credentialsService.isAuthenticated());
          console.log(this.credentialsService.credentials);
        },
        (err) => {
          console.log(err);
        }
      );

    return of(data);
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.setCredentials();
    return of(true);
  }
}
