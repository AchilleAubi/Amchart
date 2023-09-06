import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelCcaComponent } from './panel-cca.component';
import { PanelModule } from 'primeng/panel';

@NgModule({
  imports: [
    CommonModule,
    PanelModule
  ],
  declarations: [PanelCcaComponent],
  exports: [PanelCcaComponent]
})
export class PanelCcaModule { }
