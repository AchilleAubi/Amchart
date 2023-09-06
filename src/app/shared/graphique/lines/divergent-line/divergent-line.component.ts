import { Component, Input, OnInit } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'cca-divergent-line',
  template: '<div id="divergent"></div>',
  styleUrls: ['./divergent-line.component.scss'],
})
export class DivergentLineComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() series: { name: string; field: string }[] = [];

  constructor() {}

  ngOnInit() {
    let root = am5.Root.new('divergent');

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: 'panX',
        wheelY: 'zoomX',
        layout: root.verticalLayout,
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
    let xRenderer = am5xy.AxisRendererX.new(root, {});
    xRenderer.grid.template.set('location', 0.5);
    xRenderer.labels.template.setAll({
      location: 0.5,
      multiLocation: 0.5,
    });

    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: 'year',
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    xAxis.data.setAll(this.data);

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxPrecision: 0,
        renderer: am5xy.AxisRendererY.new(root, {
          inversed: true,
        }),
      })
    );

    // Add series
    for (const serie of this.series) {
      this.createSeries(chart, serie.name, serie.field, this.data);
    }

    // Add scrollbar
    chart.set(
      'scrollbarX',
      am5.Scrollbar.new(root, {
        orientation: 'horizontal',
        marginBottom: 20,
      })
    );

    let legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
      })
    );

    // Make series change state when legend item is hovered
    legend.itemContainers.template.states.create('hover', {});

    // ...
    legend.itemContainers.template.events.on('pointerover', (e) => {
      if (
        e.target.dataItem &&
        this.hasHoverFunction(e.target.dataItem.dataContext)
      ) {
        e.target.dataItem.dataContext.hover();
      }
    });

    legend.itemContainers.template.events.on('pointerout', (e) => {
      if (
        e.target.dataItem &&
        this.hasUnhoverFunction(e.target.dataItem.dataContext)
      ) {
        e.target.dataItem.dataContext.unhover();
      }
    });
    // ...

    legend.data.setAll(chart.series.values);

    // Make stuff animate on load
    chart.appear(1000, 100);
  }

  private createSeries(chart: any, name: string, field: string, data: any[]) {
    let series = chart.series.push(
      am5xy.LineSeries.new(chart.root, {
        name: name,
        xAxis: chart.xAxes.getIndex(0),
        yAxis: chart.yAxes.getIndex(0),
        valueYField: field,
        categoryXField: 'year',
        tooltip: am5.Tooltip.new(chart.root, {
          pointerOrientation: 'horizontal',
          labelText: '[bold]{name}[/]\n{categoryX}: {valueY}',
        }),
      })
    );

    series.bullets.push(function () {
      return am5.Bullet.new(chart.root, {
        sprite: am5.Circle.new(chart.root, {
          radius: 2,
          fill: series.get('fill'),
        }),
      });
    });

    // create hover state for series and for mainContainer, so that when series is hovered,
    // the state would be passed down to the strokes which are in mainContainer.
    series.set('setStateOnChildren', true);
    series.states.create('hover', {});

    series.mainContainer.set('setStateOnChildren', true);
    series.mainContainer.states.create('hover', {});

    series.strokes.template.states.create('hover', {
      strokeWidth: 4,
    });

    series.data.setAll(data);
    series.appear(1000);
  }

  private hasHoverFunction(obj: any): obj is { hover: () => void } {
    return typeof obj?.hover === 'function';
  }

  private hasUnhoverFunction(obj: any): obj is { unhover: () => void } {
    return typeof obj?.unhover === 'function';
  }
}
