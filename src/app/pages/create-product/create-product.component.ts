import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ToastService } from '@app/services/toast.service';
import { Product } from '../../@shared/models/product.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class ProductComponent implements OnInit {
  productForm!: FormGroup;
  newProduct!: Product;
  productCategories!: string[];
  image: any;
  selectedFile: any;

  constructor(private productService: ProductService, private toastService: ToastService, private fb: FormBuilder) {}

  loadForms() {
    this.productForm = this.fb.group({
      _id: [''],
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      contact: ['', Validators.required],
      adress: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.loadForms();
    this.productCategories = this.productService.getCategories();
    this.image = '';
  }

  onFileSelected(event: any) {
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.image = event.target.result;
    };
    reader.readAsDataURL(event.target.files[0]); // to trigger onload

    this.selectedFile = <File>event.target.files[0];
  }

  createProduct() {
    this.newProduct = this.productForm.value;

    this.productService.create(this.newProduct, this.selectedFile).subscribe(() => {
      console.log('produto criado');
      this.toastService.showMessage('Anuncio criado com sucesso!');
      this.ngOnInit();
    });
  }
}
