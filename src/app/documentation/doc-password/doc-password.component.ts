import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cca-doc-password',
  templateUrl: './doc-password.component.html',
  styleUrls: ['./doc-password.component.scss'],
})
export class DocPasswordComponent implements OnInit {
  conditions: string[] = [
    'At least one lowercase',
    'At least one uppercase',
    'At least one numeric',
    'Minimum 8 characters',
  ];

  constructor() {}

  ngOnInit() {}
}
