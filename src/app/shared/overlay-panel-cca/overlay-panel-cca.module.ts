import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayPanelCcaComponent } from './overlay-panel-cca.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
  imports: [
    CommonModule,
    OverlayPanelModule
  ],
  declarations: [OverlayPanelCcaComponent],
  exports: [OverlayPanelCcaComponent]
})
export class OverlayPanelCcaModule { }
