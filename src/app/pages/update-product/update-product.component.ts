import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product/product.service';
import { Product } from './../product/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent implements OnInit {
  product: Product = {
    _id: '',
    userId: '',
    title: '',
    description: '',
    category: '',
    price: '',
    adress: '',
    contact: '',
  };
  selectedFile: any;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('_id');
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }

  updateProduct(product: Product): void {
    this.productService.update(product, this.selectedFile).subscribe((response) => {
      this.router.navigate(['tabs/myProducts'], { replaceUrl: true });
    });
  }

  cancel(): void {
    this.router.navigate(['tabs/myProducts'], { replaceUrl: true });
  }
}
