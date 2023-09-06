import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  imports: [CommonModule, SidebarModule],
  declarations: [SidebarComponent],
  exports: [SidebarComponent],
})
export class SidebarModulecca {}
