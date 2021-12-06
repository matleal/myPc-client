import { Router } from '@angular/router';
import { Product } from './../product/product.model';
import { ProductService } from './../product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
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
      this.productService.showMessage('Produto deletado com sucesso!');
      this.ngOnInit();
    });
  }
}
