import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBoutonConfig } from '@core/models/shared.models';

@Component({
  selector: 'cca-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent {
  @Input() btnConfig!: IBoutonConfig;
  @Input() buttonType: string = '';
  @Input() loading_button: boolean = false;
  @Output() actionBtn = new EventEmitter<string>();
  loading: boolean = false;
  onClickBtn(label: string) {
    this.actionBtn.emit(label);
  }

  onLoadBtn() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
