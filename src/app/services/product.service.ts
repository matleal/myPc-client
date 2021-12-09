import { Product } from '../@shared/models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = 'http://localhost:3000/v1';
  baseUrlToProduct = 'http://localhost:3000/v1/products';
  baseUrlToRead = 'http://localhost:3000/v1/products/all';
  baseUrlToReadByUserId = 'http://localhost:3000/v1/products/byUserId';

  constructor(private http: HttpClient) {}

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

  getCategories(): string[] {
    const categories = [
      'Placa de video',
      'Placa mãe',
      'Processador',
      'Memória RAM',
      'Fonte',
      'Gabinete',
      'Cooler',
      'HD',
      'SSD',
      'Perifericos',
      'Outros',
    ];

    return categories;
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrlToRead);
  }

  readByUserId(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrlToReadByUserId);
  }

  readById(id: any): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrlToProduct}/${id}`);
  }

  update(product: Product, selectedFile: File): Observable<any> {
    const fd = new FormData();

    if (selectedFile) {
      fd.append('image', selectedFile, selectedFile.name);
    }

    fd.append('_id', product._id);
    fd.append('title', product.title);
    fd.append('description', product.description);
    fd.append('category', product.category);
    fd.append('price', product.price);
    fd.append('contact', product.contact);
    fd.append('adress', product.adress);
    console.log(fd);

    return this.http.put<any>(this.baseUrlToProduct, fd);
  }

  delete(id: any): Observable<any> {
    return this.http.delete<any>(`${this.baseUrlToProduct}/${id}`);
  }
}
