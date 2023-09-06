import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cca-color-select',
  templateUrl: './color-select.component.html',
  styleUrls: ['./color-select.component.scss'],
})
export class ColorSelectComponent implements OnInit {
  @Input() color!: string;
  @Input() inline: boolean = false;

  constructor() {}

  ngOnInit() {}
}
