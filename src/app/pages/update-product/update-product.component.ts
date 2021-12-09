import { Product } from './../../@shared/models/product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ToastService } from '../../services/toast.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent implements OnInit {
  productForm!: FormGroup;
  newProduct!: Product;
  productCategories!: string[];
  selectedFile: any;
  image: any;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private fb: FormBuilder
  ) {}

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

  populateForms(product: Product) {
    this.productForm.patchValue(product);
  }

  ngOnInit(): void {
    this.loadForms();
    this.productCategories = this.productService.getCategories();

    const id = this.route.snapshot.paramMap.get('_id');

    this.productService.readById(id).subscribe((product) => {
      this.populateForms(product);
      this.image = product.image;
    });
  }

  onFileSelected(event: any) {
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.image = event.target.result;
    };
    reader.readAsDataURL(event.target.files[0]); // to trigger onload

    this.selectedFile = <File>event.target.files[0];
  }

  updateProduct(): void {
    this.newProduct = this.productForm.value;

    this.productService.update(this.newProduct, this.selectedFile).subscribe((response) => {
      this.toastService.showMessage('Produto atualizado com sucesso!');
      this.router.navigate(['tabs/myProducts'], { replaceUrl: true });
    });
  }

  cancel(): void {
    this.router.navigate(['tabs/myProducts'], { replaceUrl: true });
  }
}
