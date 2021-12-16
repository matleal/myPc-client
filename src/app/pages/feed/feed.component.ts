import { CredentialsService } from '@app/auth';
import { ProductService } from '../../services/product.service';
import { Product } from '../../@shared/models/product.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import gsap from 'gsap';

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
    slidesPerView: 'auto',
  };
  disablePrevBtn: boolean = true;
  disableNextBtn: boolean = false;

  constructor(private productService: ProductService, private credentialsService: CredentialsService) {}

  async ngOnInit() {
    await this.productService.read().subscribe((products) => {
      this.products = products;
      this.allProducts = products;
      this.getProductCategories();
    });

    gsap.from('.button-category', {
      duration: 2,
      scale: 0.9,
      opacity: 1,
      delay: 0.5,
      stagger: 0.2,
      ease: 'elastic',
      force3D: true,
    });
  }

  getProductCategories() {
    this.products.map((product) => this.categories.push(product.category));
  }

  arrowVisibility() {
    let isBeg = this.slides.isBeginning();
    let isEnd = this.slides.isEnd();

    Promise.all([isBeg, isEnd]).then((data) => {
      data[0] ? (this.disablePrevBtn = true) : (this.disablePrevBtn = false);
      data[1] ? (this.disableNextBtn = true) : (this.disableNextBtn = false);
    });
  }

  next() {
    this.slides.slideNext();
    console.log('Deu next');
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
