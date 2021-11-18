import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private toastController: ToastController) {}

  showMessage(msg: string): void {
    this.toastController.create({
      message: msg,
      duration: 3000,
    });
  }
}
