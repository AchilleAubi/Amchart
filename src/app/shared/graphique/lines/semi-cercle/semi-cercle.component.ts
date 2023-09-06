import { Component, Input, OnInit } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5percent from '@amcharts/amcharts5/percent';

@Component({
  selector: 'cca-semi-cercle',
  template: '<div id="semi"></div>',
  styleUrls: ['./semi-cercle.component.scss'],
})
export class SemiCercleComponent implements OnInit {
  @Input()
  chartData!: { value: number; category: string }[];

  constructor() {}

  ngOnInit() {
    let root = am5.Root.new('semi');

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    // start and end angle must be set both for chart and series
    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        startAngle: 180,
        endAngle: 360,
        layout: root.verticalLayout,
        innerRadius: am5.percent(50),
      })
    );

    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    // start and end angle must be set both for chart and series
    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        startAngle: 180,
        endAngle: 360,
        valueField: 'value',
        categoryField: 'category',
        alignLabels: false,
      })
    );

    series.states.create('hidden', {
      startAngle: 180,
      endAngle: 180,
    });

    series.slices.template.setAll({
      cornerRadius: 5,
    });

    series.ticks.template.setAll({
      forceHidden: true,
    });

    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series.data.setAll(this.chartData);

    series.appear(1000, 100);

    // Create legend
    let legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        marginTop: 15,
        marginBottom: 15,
      })
    );

    legend.data.setAll(series.dataItems);
  }
}
