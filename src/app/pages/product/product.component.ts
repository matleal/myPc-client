import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  createProduct() {
    this.productService.showMessage('Anuncio criado com sucesso!');
  }
}
