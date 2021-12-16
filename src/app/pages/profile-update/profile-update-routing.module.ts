import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileUpdateComponent } from './profile-update.component';

const routes: Routes = [{ path: '', component: ProfileUpdateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileUpdateRoutingModule {}
