import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { I18nModule } from '@app/i18n';
import { AuthModule } from '@app/auth';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header/header.component';
import { UserModalComponent } from './modal/user-modal/user-modal.component';

@NgModule({
  imports: [CommonModule, TranslateModule, IonicModule, AuthModule, I18nModule, RouterModule],
  declarations: [ShellComponent, HeaderComponent, UserModalComponent],
})
export class ShellModule {}
