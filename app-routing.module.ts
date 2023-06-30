import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'vendas',
        loadChildren: () =>
          import('./views/vendas/vendas.module').then((m) => m.VendasModule)
      },
      {
        path: 'produtos',
        loadChildren: () =>
          import('./views/produtos/produtos.module').then((m) => m.ProdutosModule)
      },
      {
        path: 'vendedores',
        loadChildren: () =>
          import('./views/vendedores/vendedores.module').then((m) => m.VendedoresModule)
      },
      {
        path: 'categorias',
        loadChildren: () =>
          import('./views/categorias/categorias.module').then((m) => m.CategoriasModule)
      },
      {
        path: 'marcas',
        loadChildren: () =>
          import('./views/marcas/marcas.module').then((m) => m.MarcasModule)
      },
      {
        path: 'clientes',
        loadChildren: () =>
          import('./views/clientes/clientes.module').then((m) => m.ClientesModule)
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/notifications.module').then((m) => m.NotificationsModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      }
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
