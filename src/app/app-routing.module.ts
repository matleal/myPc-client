import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'feed', loadChildren: () => import('./pages/feed/feed.module').then((m) => m.FeedModule) },
    {
      path: 'product',
      loadChildren: () => import('./pages/create-product/create-product.module').then((m) => m.ProductModule),
    },
    {
      path: 'myProducts',
      loadChildren: () => import('./pages/my-products/my-products.module').then((m) => m.ProfileModule),
    },
    {
      path: 'updateProduct/:_id',
      loadChildren: () => import('./pages/update-product/update-product.module').then((m) => m.UpdateProductModule),
    },
  ]),
  { path: 'register', loadChildren: () => import('./register/register.module').then((m) => m.RegisterModule) },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: 'tabs/feed', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
