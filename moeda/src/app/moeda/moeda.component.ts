import { Component } from '@angular/core';

@Component({
  selector: 'app-moeda',
  templateUrl: './moeda.component.html',
  styleUrls: ['./moeda.component.scss']
})
export class  MoedaComponent {
  valorReal: number =0;
  taxaDolar: number=0;
  taxaEuro: number=0;
  taxaLibra: number=0;
  resultado: any;

  converter() {
    this.resultado = {
      dolar: (this.valorReal / this.taxaDolar).toFixed(2),
      euro: (this.valorReal / this.taxaEuro).toFixed(2),
      libra: (this.valorReal / this.taxaLibra).toFixed(2)
    };
  }
}
