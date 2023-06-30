import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// CoreUI Modules
import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  SharedModule
} from '@coreui/angular';

// utils
import { DocsComponentsModule } from '@docs-components/docs-components.module';

import { VendasComponent } from './vendas.component';

// Theme Routing
import { VendasRoutingModule } from './vendas-routing.module';
import { NovoPedidoComponent } from './novo-pedido/novo-pedido.component';

@NgModule({
  imports: [
    CardModule,
    GridModule,
    IconModule,
    CommonModule,
    DocsComponentsModule,
    CommonModule,
    VendasRoutingModule,
    DocsComponentsModule,
    CardModule,
    FormModule,
    GridModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    DropdownModule,
    SharedModule,
    ListGroupModule
  ],
  declarations: [
    NovoPedidoComponent,
    VendasComponent
  ]
})
export class VendasModule {
}
