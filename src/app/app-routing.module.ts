import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./pages/categories/categories.module').then((m) => m.CategoriesModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./pages/account/account.module').then((m) => m.AccountModule)
  },
  {
    path: 'offers',
    loadChildren: () =>
      import('./pages/offers/offers.module').then((m) => m.OffersModule)
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./pages/products/products.module').then((m) =>m.ProductsModule)
  },
  {
    path: 'companies',
    loadChildren: () =>
      import('./pages/companies/companies.module').then((m) => m.CompaniesModule)
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./pages/services/services.module').then((m) => m.ServicesModule)
  },
  {
    path: 'sub-services',
    loadChildren: () =>
      import('./pages/sub-services/sub-services.module').then((m) => m.ServicesModule)
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./pages/contact-us/contact-us.module').then((m) => m.ContactUsModule)
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutModule)
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./pages/checkout/checkout.module').then((m) => m.CheckoutModule)
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./pages/cart/cart.module').then((m) => m.CartModule)
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./pages/orders/orders.module').then((m) => m.OrdersModule)
  },
  {
    path: 'rates',
    loadChildren: () =>
      import('./pages/rate/rate.module').then((m) => m.RateModule)
  },
  {
    path: 'updated-successfully',
    loadChildren: () =>
      import('./pages/updated-successfully/updated-successfully.module').then((m) => m.UpdatedSuccessfullyModule)
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./pages/error/error.module').then((m) => m.ErrorModule)
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      onSameUrlNavigation: 'reload',
      useHash: true
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
