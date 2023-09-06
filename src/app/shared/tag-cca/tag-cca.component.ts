import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cca-tag',
  templateUrl: './tag-cca.component.html',
  styleUrls: ['./tag-cca.component.scss'],
})
export class TagCcaComponent implements OnInit {
  @Input() type: string = '';
  @Input() value: string = '';
  @Input() icon: string = '';

  showTag: boolean = true;
  showIcon: boolean = true;

  handleCloseClick() {
    this.showTag = false;
  }

  toggleIcon() {
    this.showIcon = !this.showIcon;
  }

  constructor() {}

  ngOnInit() {}

  getStyleClass(type: string): string {
    switch (type) {
      case 'basic':
      case 'basic-removed':
        return 'bg-slate-500';
      case 'primary':
      case 'primary-rounded':
      case 'primary-icon':
      case 'primary-removed':
        return 'bg-primary';
      case 'success':
      case 'success-rounded':
      case 'success-icon':
      case 'success-removed':
        return 'bg-success';
      case 'info':
      case 'info-rounded':
      case 'info-icon':
      case 'info-removed':
        return 'bg-info';
      case 'warn':
      case 'warn-rounded':
      case 'warn-icon':
      case 'warn-removed':
        return 'bg-warn';
      case 'error':
      case 'error-rounded':
      case 'error-icon':
      case 'error-removed':
        return 'bg-error';
      default:
        return '';
    }
  }
}
