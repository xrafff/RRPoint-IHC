import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProdutosComponent } from './produtos/produtos.component';
import { NovoProdutoComponent } from './novo-produto/novo-produto.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'produtos',
    },
    children: [
      {
        path: '',
        redirectTo: 'produtos',
      },
      {
        path: 'produtos',
        component: ProdutosComponent,
        data: {
          title: 'produtos',
        },
      },
      {
        path: 'novo-produto',
        component: NovoProdutoComponent,
        data: {
          title: 'novo-produto',
        },
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutosRoutingModule {}

