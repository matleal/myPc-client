import { User } from '../@shared/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  baseUrl = 'http://localhost:3000/v1/auth/register';

  constructor(private http: HttpClient, private toastController: ToastController) {}

  async showMessage(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      color: 'primary',
    });

    await toast.present();
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user);
  }
}
