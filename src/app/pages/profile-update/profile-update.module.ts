import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProfileUpdateRoutingModule } from './profile-update-routing.module';
import { ProfileUpdateComponent } from './profile-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfileUpdateComponent],
  imports: [CommonModule, ProfileUpdateRoutingModule, ReactiveFormsModule, IonicModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfileUpdateModule {}
