import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cca-overlay-panel',
  templateUrl: './overlay-panel-cca.component.html',
  styleUrls: ['./overlay-panel-cca.component.scss'],
})
export class OverlayPanelCcaComponent implements OnInit {
  @Input() icon: string = '';

  constructor() {}

  ngOnInit() {}
}
