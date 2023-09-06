import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineTrendModule } from './line-trend/line-trend.module';
import { ErrorTrendModule } from './error-trend/error-trend.module';
import { LineGraphModule } from './line-graph/line-graph.module';
import { LineSerieLegendModule } from './line-serie-legend/line-serie-legend.module';
import { CurvedColomnModule } from './curved-colomn/curved-colomn.module';
import { AroundChartModule } from './around-chart/around-chart.module';
import { PieChartModule } from './pie-chart/pie-chart.module';
import { SemiCercleModule } from './semi-cercle/semi-cercle.module';
import { DivergentLineModule } from './divergent-line/divergent-line.module';

@NgModule({
  imports: [
    CommonModule,
    LineTrendModule,
    ErrorTrendModule,
    LineGraphModule,
    LineSerieLegendModule,
    CurvedColomnModule,
    AroundChartModule,
    PieChartModule,
    SemiCercleModule,
    DivergentLineModule
  ],
  declarations: [],
  exports: [
    DivergentLineModule,
    LineTrendModule,
    ErrorTrendModule,
    LineGraphModule,
    LineSerieLegendModule,
    CurvedColomnModule,
    AroundChartModule,
    PieChartModule,
    SemiCercleModule
  ]
})
export class LinesModule { }
