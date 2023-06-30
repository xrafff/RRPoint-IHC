import { Component } from '@angular/core';

@Component({
  selector: 'app-novo-vendedor',
  templateUrl: './novo-vendedor.component.html',
  styleUrls: ['./novo-vendedor.component.scss']
})

export class NovoVendedorComponent {

  public estados: Array<string> = [ 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO' ];
  public sexo: Array<string> = [ 'Masculino', 'Feminino'];
  
  log(x: any) { console.log(x); }

  constructor(
    
  ) { }


  ngOnInit() {
  }
}

