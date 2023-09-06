import { Component, Input, OnInit } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'cca-curved-colomn',
  template: '<div id="curved"></div>',
  styleUrls: ['./curved-colomn.component.scss'],
})
export class CurvedColomnComponent implements OnInit {
  @Input()
  chartData: any[] = [];

  constructor() {}

  ngOnInit() {
    const root = am5.Root.new('curved');

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: 'panX',
        wheelY: 'zoomX',
      })
    );

    // Set colors
    // Set colors
    chart.set(
      'colors',
      am5.ColorSet.new(root, {
        themes: [am5themes_Animated.new(root)],
      })
    );

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    const cursor = chart.set('cursor', am5xy.XYCursor.new(root, {}));
    cursor.lineY.set('visible', false);

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    const xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: 'country',
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    xRenderer.grid.template.setAll({
      location: 1,
    });

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0.1,
        }),
      })
    );

    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: 'Series 1',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'value',
        sequencedInterpolation: true,
        categoryXField: 'country',
      })
    );

    series.columns.template.setAll({
      width: am5.percent(120),
      fillOpacity: 0.9,
      strokeOpacity: 0,
    });
    series.columns.template.adapters.add('fill', (fill, target) => {
      const colors = chart.get('colors');
      if (colors) {
        return colors.getIndex(series.columns.indexOf(target));
      }
      return fill;
    });

    series.columns.template.adapters.add('stroke', (stroke, target) => {
      const colors = chart.get('colors');
      if (colors) {
        return colors.getIndex(series.columns.indexOf(target));
      }
      return stroke;
    });

    series.columns.template.set('draw', function (display, target) {
      const w = target.getPrivate('width', 0);
      const h = target.getPrivate('height', 0);
      display.moveTo(0, h);
      display.bezierCurveTo(w / 4, h, w / 4, 0, w / 2, 0);
      display.bezierCurveTo(w - w / 4, 0, w - w / 4, h, w, h);
    });

    // Set data
    const data = this.chartData;

    xAxis.data.setAll(data);
    series.data.setAll(data);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
  }
}
