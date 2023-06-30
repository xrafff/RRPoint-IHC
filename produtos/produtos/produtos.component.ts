import { Component } from '@angular/core';
import { ProdutosService } from './../../../services/produtos/produtos.service';
import { IconSetService } from '@coreui/icons-angular';
import { brandSet, flagSet, freeSet } from '@coreui/icons';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
  providers: [IconSetService],
})
export class ProdutosComponent {
  public title = 'Produtos';
  public icons!: [string, string[]][];

  constructor(
    public iconSet: IconSetService,
    private produtosService: ProdutosService
  )
  {
    iconSet.icons = { ...freeSet, ...brandSet, ...flagSet };
  }

  public listaProdutos: any;

  ngOnInit(){
    this.produtosService.content().subscribe((result) => {
      this.listaProdutos = result['produtos'];
    });
  }

}
