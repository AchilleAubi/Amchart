import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cca-toast',
  templateUrl: './toast-cca.component.html',
  styleUrls: ['./toast-cca.component.scss'],
})
export class ToastCcaComponent implements OnInit {
  @Input() position: string = '';
  @Input() key: string = '';

  constructor() {}

  ngOnInit() {}
}
