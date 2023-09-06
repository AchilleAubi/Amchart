import { Component, Input, OnInit } from '@angular/core';
import { Tabview } from '@core/models/tabview';

@Component({
  selector: 'cca-Tabs',
  templateUrl: './Tabs-cca.component.html',
  styleUrls: ['./Tabs-cca.component.scss'],
})
export class TabsCcaComponent implements OnInit {
  @Input() type: string = '';
  @Input() dataParams: Tabview[] = [];
  activeIndex: number = 0;
  @Input() scrollable: boolean = false;

  constructor() {}

  ngOnInit() {}
}
