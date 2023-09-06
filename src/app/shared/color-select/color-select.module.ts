import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorSelectComponent } from './color-select.component';
import { ColorPickerModule } from 'primeng/colorpicker';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ColorPickerModule,
    FormsModule
  ],
  declarations: [ColorSelectComponent],
  exports: [ColorSelectComponent]
})
export class ColorSelectModule { }
