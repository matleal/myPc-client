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
  image: any;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('_id');
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
      this.image = product.image;
    });
  }

  onFileSelected(event: any) {
    let reader = new FileReader();
    reader.onload = (event:any) => {
      this.image = event.target.result;
    }
    reader.readAsDataURL(event.target.files[0]);  // to trigger onload

    this.selectedFile = <File>event.target.files[0];
  }

  updateProduct(product: Product): void {
    this.productService.update(product, this.selectedFile).subscribe((response) => {
      this.productService.showMessage('Produto atualizado com sucesso!');
      this.router.navigate(['tabs/myProducts'], { replaceUrl: true });
    });
  }

  cancel(): void {
    this.router.navigate(['tabs/myProducts'], { replaceUrl: true });
  }
}
