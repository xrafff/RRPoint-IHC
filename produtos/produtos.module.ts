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

// views
import { ProdutosComponent } from './produtos/produtos.component';
import { NovoProdutoComponent } from './novo-produto/novo-produto.component';

// Components Routing
import { ProdutosRoutingModule } from './produtos-routing.module';

@NgModule({
  imports: [
    CardModule,
    GridModule,
    IconModule,
    CommonModule,
    DocsComponentsModule,
    CommonModule,
    ProdutosRoutingModule,
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
    NovoProdutoComponent,
    ProdutosComponent
  ],
})
export class ProdutosModule {}
