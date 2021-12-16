import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateProductRoutingModule } from './update-product-routing.module';
import { UpdateProductComponent } from './update-product.component';
import { IonicModule } from '@ionic/angular';
import { InputMaskModule } from 'racoon-mask-raw';

@NgModule({
  declarations: [UpdateProductComponent],
  imports: [CommonModule, UpdateProductRoutingModule, IonicModule, FormsModule, ReactiveFormsModule, InputMaskModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UpdateProductModule {}
