import { Component, Input, OnInit } from '@angular/core';
import { Select } from '@core/models/select';

@Component({
  selector: 'cca-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() type!: string;
  @Input() data!: Select[];
  @Input() oneValue: Select | undefined;
  @Input() multipleValue: Select[] | undefined;
  @Input() width!: string;
  @Input() placeholder!: string;

  constructor() {}

  ngOnInit() {}
}
