import { Component, Input, OnInit } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'cca-rotated-label',
  template: '<div id="chartdiv"></div>',
  styleUrls: ['./error-trend.component.scss'],
})
export class ErrorTrendComponent implements OnInit {
  @Input()
  chartData: any[] = [];

  constructor() {}

  ngOnInit() {
    let root = am5.Root.new('chartdiv');

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: 'panX',
        wheelY: 'zoomX',
        pinchZoomX: true,
      })
    );

    let cursor = chart.set('cursor', am5xy.XYCursor.new(root, {}));
    cursor.lineY.set('visible', false);

    let xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
    xRenderer.labels.template.setAll({
      rotation: -90,
      centerY: am5.p50,
      centerX: am5.p100,
      paddingRight: 15,
    });

    xRenderer.grid.template.setAll({
      location: 1,
    });

    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: 'country',
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0.1,
        }),
      })
    );

    let series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: 'Series 1',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'value',
        sequencedInterpolation: true,
        categoryXField: 'country',
        tooltip: am5.Tooltip.new(root, {
          labelText: '{valueY}',
        }),
      })
    );

    let colors: am5.ColorSet | undefined;

    if (chart.get('colors') !== undefined) {
      colors = chart.get('colors');
    } else {
      colors = am5.ColorSet.new(root, {});
      chart.set('colors', colors);
    }

    series.columns.template.adapters.add('fill', function (fill, target) {
      if (colors) {
        const colorIndex = colors.getIndex(series.columns.indexOf(target));
        return colorIndex;
      }
      return fill;
    });

    series.columns.template.adapters.add('stroke', function (stroke, target) {
      if (colors) {
        const colorIndex = colors.getIndex(series.columns.indexOf(target));
        return colorIndex;
      }
      return stroke;
    });

    xAxis.data.setAll(this.chartData);
    series.data.setAll(this.chartData);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
  }
}
