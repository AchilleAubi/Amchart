import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [IconComponent],
  imports: [CommonModule, ButtonModule],
  exports: [IconComponent],
})
export class IconModule {}
