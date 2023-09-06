import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cca-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  @Input() type: string = '';
  @Input() label: string = '';
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;

  constructor() {}

  ngOnInit() {}
}
