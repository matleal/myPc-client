import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product: Product = {
    title: '',
    description: '',
    category: '',
    price: 0,
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  createProduct() {
    this.productService.create(this.product).subscribe(() => {
      console.log('produto criado');
    });
    // this.productService.showMessage('Anuncio criado com sucesso!');
  }
}
