import { Component, Input, OnInit } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'cca-stacked-colomn',
  template: '<div id="chartdivn"></div>',
  styleUrls: ['./line-trend.component.scss'],
})
export class LineTrendComponent implements OnInit {
  @Input() chartData: any[] = [];
  @Input() seriesData: any[] = [];

  ngOnInit(): void {
    let root = am5.Root.new('chartdivn');

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: 'panX',
        wheelY: 'zoomX',
        layout: root.verticalLayout,
      })
    );

    chart.set(
      'scrollbarX',
      am5.Scrollbar.new(root, { orientation: 'horizontal' })
    );

    let xRenderer = am5xy.AxisRendererX.new(root, {});
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: 'year',
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    xRenderer.grid.template.setAll({
      location: 1,
    });

    xAxis.data.setAll(this.chartData);

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        min: 0,
        max: 100,
        numberFormat: "#'%'",
        strictMinMax: true,
        calculateTotals: true,
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0.1,
        }),
      })
    );

    let legend = chart.children.push(
      am5.Legend.new(root, { centerX: am5.p50, x: am5.p50 })
    );

    const makeSeries = (name: string, fieldName: string, color: string) => {
      let series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: name,
          stacked: true,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: fieldName,
          valueYShow: 'valueYTotalPercent',
          categoryXField: 'year',
        })
      );

      series.columns.template.setAll({
        tooltipText: `{name}, {categoryX}:{valueYTotalPercent.formatNumber('#.#')}%`,
        tooltipY: am5.percent(10),
      });

      series.data.setAll(this.chartData);

      series.appear();

      series.bullets.push(() => {
        return am5.Bullet.new(root, {
          sprite: am5.Label.new(root, {
            text: `{valueYTotalPercent.formatNumber('#.#')}%`,
            fill: root.interfaceColors.get('alternativeText'),
            centerY: am5.p50,
            centerX: am5.p50,
            populateText: true,
          }),
        });
      });

      legend.data.push(series);

      series.set('fill', am5.color(color));
      series.set('stroke', am5.color(color));
    };

    this.seriesData.forEach((series) => {
      makeSeries(series.name, series.fieldName, series.color);
    });

    chart.appear(1000, 100);
  }
}
