import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ProfileRoutingModule } from './my-products-routing.module';
import { ProfileComponent } from './my-products.component';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, ProfileRoutingModule, IonicModule],
})
export class ProfileModule {}
