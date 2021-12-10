import { CredentialsService } from '@app/auth';
import { ProductService } from '../../services/product.service';
import { Product } from '../../@shared/models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  products: Product[] = [];
  productsByCategory: Product[] = [];

  constructor(private productService: ProductService, private credentialsService: CredentialsService) {}

  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
      this.products = products;
      console.log(products);
    });
  }

  listByCategory(category: string) {
    this.products = this.products.filter((product) => product.category === category);
    console.log(this.products);
  }
}
