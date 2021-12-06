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
    _id: '',
    userId: '',
    title: '',
    description: '',
    category: '',
    contact: '',
    adress: '',
    price: '',
  };

  image: any;
  selectedFile: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  onFileSelected(event: any) {
    let reader = new FileReader();
    reader.onload = (event:any) => {
      this.image = event.target.result;
    }
    reader.readAsDataURL(event.target.files[0]);  // to trigger onload

    this.selectedFile = <File>event.target.files[0];
  }

  createProduct() {
    this.productService.create(this.product, this.selectedFile).subscribe(() => {
      console.log('produto criado');
      this.productService.showMessage('Anuncio criado com sucesso!');
      this.productService.emptyFields(this.product);
    });
  }
}
