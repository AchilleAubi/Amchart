import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cca-password',
  templateUrl: './password-cca.component.html',
  styleUrls: ['./password-cca.component.scss'],
})
export class PasswordCcaComponent implements OnInit {
  @Input() header: string = '';
  @Input() type: string = '';
  @Input() value: string = '';
  @Input() toggleMask: boolean = false;
  @Input() suggest: string = '';
  @Input() suggestions: string[] = [];

  constructor() { }

  ngOnInit() { }
}
