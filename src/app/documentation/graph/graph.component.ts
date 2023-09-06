import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cca-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {
  chartDataPrimeng: any = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [50, 72, 30, 45, 65, 80, 55],
        fill: false,
        borderColor: 'blue',
        tension: 0.4,
      },
      {
        label: 'Expenses',
        data: [35, 45, 25, 40, 50, 60, 45],
        fill: false,
        borderColor: 'red',
        tension: 0.4,
      },
      {
        label: 'Revenue',
        data: [25, 38, 20, 30, 45, 50, 40],
        fill: false,
        borderColor: 'green',
        tension: 0.4,
      },
      {
        label: 'Profit',
        data: [20, 30, 18, 25, 35, 42, 30],
        fill: false,
        borderColor: 'orange',
        tension: 0.4,
      },
    ],
  };

  chartOptions: any = {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: 'black',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'gray',
        },
        grid: {
          color: 'lightgray',
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          color: 'gray',
        },
        grid: {
          color: 'lightgray',
          drawBorder: false,
        },
      },
    },
  };

  myData = [
    {
      year: '1930',
      italy: 1,
      germany: 5,
      uk: 3,
      france: 8,
      belgique: 4,
    },
    {
      year: '1934',
      italy: 1,
      germany: 2,
      uk: 6,
      france: 8,
      belgique: 4,
    },
    {
      year: '1938',
      italy: 2,
      germany: 3,
      uk: 1,
      france: 8,
      belgique: 4,
    },
    // Add more data points as needed
  ];

  mySeries = [
    { name: 'Italy', field: 'italy' },
    { name: 'Germany', field: 'germany' },
    { name: 'UK', field: 'uk' },
    { name: 'France', field: 'france' },
    { name: 'Belgique', field: 'belgique' },
    // Add more series as needed, matching the field names in the data
  ];

  aroundData = [
    { value: 10, category: 'One' },
    { value: 9, category: 'Two' },
    { value: 6, category: 'Three' },
    { value: 5, category: 'Four' },
    { value: 4, category: 'Five' },
    { value: 3, category: 'Six' },
    { value: 1, category: 'Seven' },
  ];

  curvedData: { country: string; value: number }[] = [
    { country: 'USA', value: 2025 },
    { country: 'China', value: 1882 },
    { country: 'Japan', value: 1809 },
    { country: 'Germany', value: 1322 },
    { country: 'UK', value: 1122 },
    { country: 'France', value: 1114 },
    { country: 'India', value: 984 },
    { country: 'Spain', value: 711 },
    { country: 'Netherlands', value: 665 },
    { country: 'South Korea', value: 443 },
    { country: 'Canada', value: 441 },
  ];

  chartDataRadius = [
    { country: 'Lithuania', sales: 501.9 },
    { country: 'Czechia', sales: 301.9 },
    { country: 'Ireland', sales: 201.1 },
    { country: 'Germany', sales: 165.8 },
    { country: 'Australia', sales: 139.9 },
    { country: 'Austria', sales: 128.3 },
    { country: 'UK', sales: 99 },
    { country: 'Belgium', sales: 60 },
    { country: 'The Netherlands', sales: 50 },
  ];

  yourData: any[] = [
    {
      name: 'Série 1',
      data: [
        { date: new Date('2022-01-01'), value: 100 },
        { date: new Date('2022-01-02'), value: 150 },
        { date: new Date('2022-01-03'), value: 200 },
        // ...
      ],
    },
    {
      name: 'Série 2',
      data: [
        { date: new Date('2022-01-01'), value: 50 },
        { date: new Date('2022-01-02'), value: 75 },
        { date: new Date('2022-01-03'), value: 125 },
        // ...
      ],
    },
    {
      name: 'Série 3',
      data: [
        { date: new Date('2022-01-01'), value: 150 },
        { date: new Date('2022-01-02'), value: 100 },
        { date: new Date('2022-01-03'), value: 200 },
        // ...
      ],
    },
    // Ajoutez d'autres séries si nécessaire...
  ];

  datalinegraph: any[] = [
    {
      name: 'Série 1',
      data: [
        { date: new Date('2023-01-01').getTime(), value: 50 },
        { date: new Date('2023-01-20').getTime(), value: 20 },
        { date: new Date('2023-02-03').getTime(), value: 90 },
        { date: new Date('2023-02-20').getTime(), value: 35 },
        { date: new Date('2023-03-02').getTime(), value: 67 },
        { date: new Date('2023-03-29').getTime(), value: 89 },
        { date: new Date('2023-04-15').getTime(), value: 50 },
        { date: new Date('2023-05-01').getTime(), value: 120 },
        { date: new Date('2023-05-28').getTime(), value: 92 },
        { date: new Date('2023-06-14').getTime(), value: 26 },
        { date: new Date('2023-06-25').getTime(), value: 35 },
        { date: new Date('2023-07-08').getTime(), value: 56 },
        // ...
      ],
    },
    // {
    //   name: 'Série 2',
    //   data: [
    //     { date: new Date("2023-01-01").getTime(), value: 400 },
    //     { date: new Date("2023-01-02").getTime(), value: 500 },
    //     { date: new Date("2023-02-03").getTime(), value: 300 },
    //     // ...
    //   ]
    // },
    // Ajoutez d'autres séries si nécessaire...
  ];

  data = [
    {
      year: '2021',
      europe: 2.5,
      namerica: 2.5,
      asia: 2.1,
      lamerica: 1,
      meast: 0.8,
      africa: 0.4,
    },
    {
      year: '2022',
      europe: 2.6,
      namerica: 2.7,
      asia: 2.2,
      lamerica: 0.5,
      meast: 0.4,
      africa: 0.3,
    },
    {
      year: '2023',
      europe: 2.8,
      namerica: 2.9,
      asia: 2.4,
      lamerica: 0.3,
      meast: 0.9,
      africa: 0.5,
    },
  ];

  seriesData = [
    { name: 'Europe', fieldName: 'europe', color: '#FF0000' },
    { name: 'North America', fieldName: 'namerica', color: '#00FF00' },
    { name: 'Asia', fieldName: 'asia', color: '#0000FF' },
    { name: 'Latin America', fieldName: 'lamerica', color: '#FF00FF' },
    { name: 'Middle East', fieldName: 'meast', color: '#FFFF00' },
    { name: 'Africa', fieldName: 'africa', color: '#00FFFF' },
  ];

  chartData = [
    {
      country: 'USA',
      value: 2025,
    },
    {
      country: 'China',
      value: 1882,
    },
    {
      country: 'Japan',
      value: 1809,
    },
    {
      country: 'Germany',
      value: 1322,
    },
    {
      country: 'UK',
      value: 1122,
    },
    {
      country: 'France',
      value: 1114,
    },
    {
      country: 'India',
      value: 984,
    },
    {
      country: 'Spain',
      value: 711,
    },
    {
      country: 'Netherlands',
      value: 665,
    },
    {
      country: 'South Korea',
      value: 443,
    },
    {
      country: 'Canada',
      value: 441,
    },
  ];

  colors = ['#FF0000', '#00FF00', '#0000FF'];

  constructor() {}

  ngOnInit() {}
}
