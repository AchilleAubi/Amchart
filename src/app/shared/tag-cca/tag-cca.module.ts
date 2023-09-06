import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagCcaComponent } from './tag-cca.component';
import { TagModule } from 'primeng/tag';

@NgModule({
  imports: [
    CommonModule,
    TagModule
  ],
  declarations: [TagCcaComponent],
  exports: [TagCcaComponent]
})
export class TagCcaModule { }
