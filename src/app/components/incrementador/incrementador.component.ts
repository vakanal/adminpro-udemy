import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input() leyenda = 'Leyenda';
  @Input() progreso = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  @ViewChild('txtProgress') txtProgress: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onChanges(newValue: number) {
    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0 || newValue === null) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }

  cambiarValor(valor: number) {
    const progresoValor = Number(this.progreso);
    this.progreso = progresoValor + valor;
    if (this.progreso > 100) {
      this.progreso = 100;
    } else if (this.progreso < 0) {
      this.progreso = 0;
    }
    // Emitimos el evento del @Output():
    this.cambioValor.emit(this.progreso);
    // Cambiamos el foco:
    this.txtProgress.nativeElement.focus();
  }

}
