import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'cca-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  providers: [ConfirmationService],
})
export class AlertComponent implements OnInit {
  constructor(private confirmationService: ConfirmationService) {}
  @Input() alertContent: string = '';
  @Input() showCancelBtn: boolean = false;
  @Input() btnTitle: string = '';
  @Input() confirmBtnClass: string = '';
  @Output() closed = new EventEmitter<void>();
  @Output() action = new EventEmitter<void>();
  ngOnInit() {
    this.confirmationService.confirm({
      message: this.alertContent,
    });
  }

  closePopup() {
    this.closed.emit();
  }
}
