import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ProductInfoRoutingModule } from './product-info-routing.module';
import { ProductInfoComponent } from './product-info.component';


@NgModule({
  declarations: [
    ProductInfoComponent
  ],
  imports: [
    CommonModule,
    ProductInfoRoutingModule,
    IonicModule,
  ]
})
export class ProductInfoModule { }
