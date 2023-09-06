import { Component, OnInit } from '@angular/core';
import { ToastService } from '@core/services/toast/toast.service';

@Component({
  selector: 'cca-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent implements OnInit {
  constructor(private toast: ToastService) {}

  ngOnInit() {}

  showToast(
    position: string,
    type: string,
    title: string,
    message: string,
    styleClass: string
  ) {
    this.toast.show(position, type, title, message, styleClass);
  }
}
