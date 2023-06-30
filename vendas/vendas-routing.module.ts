import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendasComponent } from './vendas.component';
import { NovoPedidoComponent } from './novo-pedido/novo-pedido.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'vendas',
    },
    children: [
      {
        path: '',
        redirectTo: 'vendas',
      },
      {
        path: 'vendas',
        component: VendasComponent,
        data: {
          title: 'Vendas',
        },
      },
      {
        path: 'novo-pedido',
        component: NovoPedidoComponent,
        data: {
          title: 'novo-pedido'
        }
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendasRoutingModule {}
