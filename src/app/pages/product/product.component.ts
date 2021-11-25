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
    price: '',
  };

  selectedFile: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
  }

  createProduct() {
    this.productService.create(this.product, this.selectedFile).subscribe(() => {
      console.log('produto criado');
    });

    // this.productService.showMessage('Anuncio criado com sucesso!');
  }
}
