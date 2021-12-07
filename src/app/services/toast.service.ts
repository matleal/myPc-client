import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastController: ToastController) {}

  async showMessage(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      color: 'primary',
    });

    await toast.present();
  }
}
