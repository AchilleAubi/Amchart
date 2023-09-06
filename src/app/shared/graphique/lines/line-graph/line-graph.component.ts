import { Component, Input, OnInit } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'cca-line-graph',
  template: '<div id="linegraph"></div>',
  styleUrls: ['./line-graph.component.scss'],
})
export class LineGraphComponent implements OnInit {
  @Input() data: any[] = [];

  constructor() {}

  ngOnInit() {
    let root = am5.Root.new('linegraph');

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: 'panX',
        wheelY: 'zoomX',
        pinchZoomX: true,
      })
    );

    // Add cursor
    let cursor = chart.set(
      'cursor',
      am5xy.XYCursor.new(root, {
        behavior: 'none',
      })
    );
    cursor.lineY.set('visible', false);

    // Create axes
    let xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        maxDeviation: 0.2,
        baseInterval: {
          timeUnit: 'day',
          count: 1,
        },
        renderer: am5xy.AxisRendererX.new(root, {}),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    // Add series
    if (this.data) {
      this.data.forEach((seriesData) => {
        let series = chart.series.push(
          am5xy.LineSeries.new(root, {
            name: seriesData.name,
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: 'value',
            valueXField: 'date',
            tooltip: am5.Tooltip.new(root, {
              labelText: '{valueY}',
            }),
          })
        );

        series.data.setAll(seriesData.data);
      });
    }

    // Add scrollbar
    chart.set(
      'scrollbarX',
      am5.Scrollbar.new(root, {
        orientation: 'horizontal',
      })
    );

    // Make stuff animate on load
    chart.appear(1000, 100);
  }
}
