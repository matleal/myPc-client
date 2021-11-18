import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from '@app/settings/settings.component';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [Shell.childRoutes([{ path: 'settings', component: SettingsComponent }])];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class SettingsRoutingModule {}
