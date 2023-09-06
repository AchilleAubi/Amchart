import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonsModule } from '@shared/buttons/buttons.module';
@NgModule({
  imports: [CommonModule, ConfirmDialogModule, ButtonsModule],
  declarations: [AlertComponent],
  exports: [AlertComponent],
})
export class AlertModule {}
