import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@app/@shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrlToUser = 'http://localhost:3000/v1/users/profile';
  baseUrlToUpdateUser = 'http://localhost:3000/v1/users';

  constructor(private http: HttpClient) {}

  getUser(): Observable<User> {
    return this.http.get<User>(this.baseUrlToUser);
  }

  updateUser(user: any, id: string): Observable<User> {
    return this.http.put<User>(`${this.baseUrlToUpdateUser}/${id}`, user);
  }
}
