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
  baseUrlToUpload = 'http://localhost:3000/v1/products/upload';

  constructor(private toastController: ToastController, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.toastController.create({
      message: msg,
      duration: 3000,
    });
  }

  create(product: Product, selectedFile: File): Observable<any> {
    const fd = new FormData();
    fd.append('image', selectedFile, selectedFile.name);
    fd.append('title', product.title);
    fd.append('description', product.description);
    fd.append('category', product.category);
    fd.append('price', product.price);
    return this.http.post<any>(this.baseUrlToCreate, fd);
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrlToRead);
  }
}
