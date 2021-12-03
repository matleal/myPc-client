import { element } from 'protractor';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = 'http://localhost:3000/v1';
  baseUrlToProduct = 'http://localhost:3000/v1/products';
  baseUrlToRead = 'http://localhost:3000/v1/products/all';

  constructor(private toastController: ToastController, private http: HttpClient) {}

  async showMessage(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      color: 'primary',
    });

    await toast.present();
  }

  emptyFields(product: Product) {
    product._id = '';
    product.title = '';
    product.description = '';
    product.category = '';
    product.price = '';
    product.contact = '';
    product.adress = '';
    product.image = '';
  }

  create(product: Product, selectedFile: File): Observable<any> {
    const fd = new FormData();
    fd.append('image', selectedFile, selectedFile.name);
    fd.append('title', product.title);
    fd.append('description', product.description);
    fd.append('category', product.category);
    fd.append('price', product.price);
    fd.append('contact', product.contact);
    fd.append('adress', product.adress);
    return this.http.post<any>(this.baseUrlToProduct, fd);
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrlToRead);
  }

  readById(id: any): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrlToProduct}/${id}`);
  }

  update(product: Product, selectedFile: File): Observable<any> {
    const fd = new FormData();
    fd.append('image', selectedFile, selectedFile.name);
    fd.append('title', product.title);
    fd.append('description', product.description);
    fd.append('category', product.category);
    fd.append('price', product.price);
    fd.append('contact', product.contact);
    fd.append('adress', product.adress);
    return this.http.put<any>(`${this.baseUrlToProduct}/${product._id}`, fd);
  }

  delete(id: any): Observable<any> {
    return this.http.delete<any>(`${this.baseUrlToProduct}/${id}`);
  }
}
