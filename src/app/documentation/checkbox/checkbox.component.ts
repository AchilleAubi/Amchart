import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cca-checkbox-doc',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  ingredient!: string;
  constructor() { }
  ngOnInit() { }
}
