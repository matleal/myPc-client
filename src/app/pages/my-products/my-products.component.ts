import { Router } from '@angular/router';
import { Product } from '../../@shared/models/product.model';
import { ProductService } from '../../services/product.service';
import { ToastService } from '@app/services/toast.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss'],
})
export class ProfileComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router, private toastService: ToastService) {}

  ngOnInit(): void {
    this.productService.readByUserId().subscribe((products) => {
      this.products = products;
      console.log(products);
    });
  }

  navigateToUpdate(id: string) {
    this.router.navigate([`tabs/updateProduct`, id], {
      replaceUrl: true,
    });
  }

  remove(id: string) {
    this.productService.delete(id).subscribe(() => {
      console.log('produto deletado!');
      this.toastService.showMessage('Produto deletado com sucesso!');
      this.ngOnInit();
    });
  }
}
