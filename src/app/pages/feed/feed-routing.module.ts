import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed.component';

const routes: Routes = [
  { path: '', component: FeedComponent },
  {
    path: 'product-info/:id',
    loadChildren: () => import('../product-info/product-info.module').then((m) => m.ProductInfoModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedRoutingModule {}
