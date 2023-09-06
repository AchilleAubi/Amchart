import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cca-color-pick',
  templateUrl: './color-pick.component.html',
  styleUrls: ['./color-pick.component.scss'],
})
export class ColorPickComponent implements OnInit {
  color: string = '';

  constructor() {}

  ngOnInit() {}
}
