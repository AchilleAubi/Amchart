import { Component, Input, OnInit } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'cca-line',
  template: '<div id="line"></div>',
  styleUrls: ['./line-serie-legend.component.scss'],
})
export class LineSerieLegendComponent implements OnInit {
  @Input() data: any[] = [];

  constructor() {}

  ngOnInit() {
    let root = am5.Root.new('line');

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        focusable: true,
        panX: true,
        panY: true,
        wheelX: 'panX',
        wheelY: 'zoomX',
        pinchZoomX: true,
      })
    );

    let easing = am5.ease.linear;
    let colors = chart.get('colors');
    if (colors) {
      colors.set('step', 3);
    }

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        maxDeviation: 0.1,
        groupData: false,
        baseInterval: {
          timeUnit: 'day',
          count: 1,
        },
        renderer: am5xy.AxisRendererX.new(root, {}),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    function createAxisAndSeries(
      data: any[],
      startValue: number,
      opposite: boolean
    ) {
      let yRenderer = am5xy.AxisRendererY.new(root, {
        opposite: opposite,
      });
      let yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          maxDeviation: 1,
          renderer: yRenderer,
        }) as am5xy.ValueAxis<am5xy.AxisRenderer>
      );

      const valueYAxis = yAxis as am5xy.ValueAxis<am5xy.AxisRenderer>;
      const firstYAxis = chart.yAxes.getIndex(
        0
      ) as am5xy.ValueAxis<am5xy.AxisRenderer>;

      if (valueYAxis !== firstYAxis) {
        valueYAxis.set('syncWithAxis', firstYAxis);
      }

      // Add series
      // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
      let series = chart.series.push(
        am5xy.LineSeries.new(root, {
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: 'value',
          valueXField: 'date',
          tooltip: am5.Tooltip.new(root, {
            pointerOrientation: 'horizontal',
            labelText: '{valueY}',
          }),
        })
      );

      //series.fills.template.setAll({ fillOpacity: 0.2, visible: true });
      series.strokes.template.setAll({ strokeWidth: 1 });

      yRenderer.grid.template.set('strokeOpacity', 0.05);
      yRenderer.labels.template.set('fill', series.get('fill'));
      yRenderer.setAll({
        stroke: series.get('fill'),
        strokeOpacity: 1,
        opacity: 1,
      });

      // Set up data processor to parse string dates
      // https://www.amcharts.com/docs/v5/concepts/data/#Pre_processing_data
      series.data.processor = am5.DataProcessor.new(root, {
        dateFormat: 'yyyy-MM-dd',
        dateFields: ['date'],
      });

      series.data.setAll(data);
    }

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set(
      'cursor',
      am5xy.XYCursor.new(root, {
        xAxis: xAxis,
        behavior: 'none',
      })
    );
    cursor.lineY.set('visible', false);

    // add scrollbar
    chart.set(
      'scrollbarX',
      am5.Scrollbar.new(root, {
        orientation: 'horizontal',
      })
    );

    this.data.forEach((seriesData) => {
      createAxisAndSeries(seriesData.data, 100, false);
      // ...
    });

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);

    // Generates random data, quite different range
    function generateChartData(value: number) {
      let data = [];
      let firstDate = new Date();
      firstDate.setDate(firstDate.getDate() - 100);
      firstDate.setHours(0, 0, 0, 0);

      for (let i = 0; i < 100; i++) {
        let newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + i);

        value += Math.round(
          ((Math.random() < 0.5 ? 1 : -1) * Math.random() * value) / 20
        );

        data.push({
          date: newDate,
          value: value,
        });
      }
      return data;
    }
  }
}
