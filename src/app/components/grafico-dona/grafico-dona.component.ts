import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent {

  // Doughnut
  @Input() doughnutChartLabels: string[] = [];
  @Input() doughnutChartData: number[] = [];
  public doughnutChartType = 'doughnut';

  constructor() { }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
