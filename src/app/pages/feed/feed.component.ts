import { CredentialsService } from '@app/auth';
import { ProductService } from '../../services/product.service';
import { Product } from '../../@shared/models/product.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @ViewChild('categorySlider') slides!: IonSlides;

  products: Product[] = [];
  allProducts: Product[] = [];
  categories: string[] = [];

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 'auto'
  };
  disablePrevBtn: boolean = true;
  disableNextBtn: boolean = false;

  constructor(private productService: ProductService, private credentialsService: CredentialsService) {}

  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
      this.products = products;
      this.allProducts = products;
      this.getProductCategories()
      console.log(products);
    });
  }

  getProductCategories() {
    this.products.map((product) => this.categories.push(product.category));
  }

  arrowVisibility() {
    let isBeg = this.slides.isBeginning();
    let isEnd = this.slides.isEnd();

    Promise.all([isBeg, isEnd]).then(data => {
      data[0] ? (this.disablePrevBtn = true) : (this.disablePrevBtn = false);
      data[1] ? (this.disableNextBtn = true) : (this.disableNextBtn = false);
    });
  }

  next() {
    this.slides.slideNext();
    console.log('Deu next')
  }

  prev() {
    this.slides.slidePrev();
  }

  reachedEnd() {
    this.disableNextBtn = true;
  }


  listByCategory(category: string) {
    this.products = this.allProducts.filter((product) => product.category === category);
  }

  listAll() {
    this.products = this.allProducts;
  }
}
