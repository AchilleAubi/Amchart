import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastCcaComponent } from './toast-cca.component';
import { ToastModule } from 'primeng/toast';

@NgModule({
  imports: [
    CommonModule,
    ToastModule
  ],
  declarations: [ToastCcaComponent],
  exports: [ToastCcaComponent]
})
export class ToastCcaModule { }
