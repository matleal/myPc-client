import { CredentialsService } from '@app/auth';
import { ProductService } from './../product/product.service';
import { Product } from './../product/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private credentialsService: CredentialsService) {}

  ngOnInit(): void {
    console.log(this.credentialsService.isAuthenticated());
    console.log(this.credentialsService.credentials);
    // this.productService.read().subscribe((products) => {
    //   this.products = products;
    //   console.log(products);
    // });

    this.productService.read().subscribe((products) => {
      this.products = products;
      console.log(products);
    });
  }
}


