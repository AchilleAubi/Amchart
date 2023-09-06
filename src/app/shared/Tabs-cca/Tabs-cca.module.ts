import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsCcaComponent } from './Tabs-cca.component';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  imports: [
    CommonModule,
    TabViewModule
  ],
  declarations: [TabsCcaComponent],
  exports: [TabsCcaComponent]
})
export class TabsCcaModule { }
