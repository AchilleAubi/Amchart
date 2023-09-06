import { Component, Input } from '@angular/core';

@Component({
  selector: 'cca-button-toggle-group',
  templateUrl: './button-toggle-group.component.html',
  styleUrls: ['./button-toggle-group.component.scss'],
})
export class ButtonToggleGroupComponent {
  @Input() options: any[] = [];
  @Input() value!: any;
}
