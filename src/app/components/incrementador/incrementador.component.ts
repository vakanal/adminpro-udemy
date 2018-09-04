import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  leyenda = 'Leyenda';

  progreso = 50;

  constructor() { }

  ngOnInit() {
  }

  cambiarValor(valor: number) {
    const progresoValor = Number(this.progreso);
    this.progreso = progresoValor + valor;
    if (this.progreso > 100) {
      this.progreso = 100;
    } else if (this.progreso < 0) {
      this.progreso = 0;
    }
  }

}
