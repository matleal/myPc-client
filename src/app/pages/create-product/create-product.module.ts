import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { ProductRoutingModule } from './create-product-routing.module';
import { ProductComponent } from './create-product.component';

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, ProductRoutingModule, IonicModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductModule {}
