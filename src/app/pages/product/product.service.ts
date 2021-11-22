import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrlToCreate = 'http://localhost:3000/v1/products';
  baseUrlToRead = 'http://localhost:3000/v1/products/all';

  constructor(private toastController: ToastController, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.toastController.create({
      message: msg,
      duration: 3000,
    });
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrlToCreate, product);
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrlToRead);
  }
}
