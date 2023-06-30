import { Component, OnInit } from '@angular/core';
import { VendasService } from './../../services/vendas/vendas.service';
import { IconSetService } from '@coreui/icons-angular';
import { brandSet, flagSet, freeSet } from '@coreui/icons';

@Component({
  templateUrl: 'vendas.component.html'
})
export class VendasComponent implements OnInit {
  public title = 'Vendas';
  public icons!: [string, string[]][];

  constructor(
    public iconSet: IconSetService,
    private vendasService: VendasService
  ) {
    iconSet.icons = { ...freeSet, ...brandSet, ...flagSet };
  }

  public listaVendas: any;

  ngOnInit() {
    this.vendasService.content().subscribe((result) => {
      this.listaVendas = result['vendas'];
    });
  }
}