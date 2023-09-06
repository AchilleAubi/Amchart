import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, MultiSelectModule, DropdownModule, FormsModule],
  declarations: [SelectComponent],
  exports: [SelectComponent],
})
export class SelectModule {}
