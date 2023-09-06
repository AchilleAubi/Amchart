import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cca-panel',
  templateUrl: './panel-cca.component.html',
  styleUrls: ['./panel-cca.component.scss'],
})
export class PanelCcaComponent implements OnInit {
  @Input() header: string = 'Header';
  @Input() content: string = '';
  @Input() toggleable: boolean = false;
  @Input() type: string = '';

  constructor() {}

  ngOnInit() {}
}
