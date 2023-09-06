import { Component, OnInit } from '@angular/core';
import { Select } from '@core/models/select';

@Component({
  selector: 'cca-select-doc',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  cities: Select[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];

  constructor() {}

  ngOnInit() {}
}
